import asyncio
import os
import requests


class AudioToTextService:
    def __init__(self, api_key: str):
        if not api_key:
            raise ValueError("AssemblyAI API key is required")
        self.api_key = api_key

    async def convert_audio_to_text(self, audio_path: str):
        try:
            # Upload audio to AssemblyAI
            upload_url = await self._upload_audio(audio_path)
            # Start transcription
            transcript_id = await self._start_transcription(upload_url)
            # Poll for transcription result
            transcript = await self._poll_transcription(transcript_id)
            return transcript
        except Exception as e:
            raise Exception(f"Failed to convert audio to text: {e}")

    async def _upload_audio(self, audio_path: str):
        headers = {"Authorization": self.api_key}
        with open(audio_path, "rb") as f:
            response = requests.post(
                "https://api.assemblyai.com/v2/upload",
                headers=headers,
                data=f,
            )
        if response.status_code != 200:
            raise Exception("Failed to upload audio")
        return response.json()["upload_url"]

    async def _start_transcription(self, audio_url: str):
        headers = {
            "Authorization": self.api_key,
            "Content-Type": "application/json",
        }
        data = {"audio_url": audio_url, "language_code": "de"}
        response = requests.post(
            "https://api.assemblyai.com/v2/transcript",
            headers=headers,
            json=data,
        )
        if response.status_code != 200:
            raise Exception("Failed to start transcription")
        return response.json()["id"]

    async def _poll_transcription(self, transcript_id: str):
        headers = {"Authorization": self.api_key}
        for _ in range(30):  # Max 30 attempts
            response = requests.get(
                f"https://api.assemblyai.com/v2/transcript/{transcript_id}",
                headers=headers,
            )
            if response.status_code != 200:
                raise Exception("Failed to poll transcription status")
            status = response.json()["status"]
            if status == "completed":
                return response.json()["text"]
            elif status == "error":
                raise Exception("Transcription failed")
            await asyncio.sleep(3)  # Wait 3 seconds before polling again
        raise Exception("Transcription timed out")
