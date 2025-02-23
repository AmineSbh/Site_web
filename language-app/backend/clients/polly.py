import os
import boto3
from botocore.exceptions import NoCredentialsError


class PollyClient:
    def __init__(self):
        self.client = boto3.client(
            "polly",
            region_name=os.getenv("AWS_REGION"),
            aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
            aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
        )

    async def convert_text_to_audio(self, text, voice_id="Hans"):
        try:
            response = self.client.synthesize_speech(
                Text=text,
                OutputFormat="mp3",
                VoiceId=voice_id,
                Engine="neural",
            )
            audio_file = f"./audio/{os.urandom(16).hex()}.mp3"
            with open(audio_file, "wb") as f:
                f.write(response["AudioStream"].read())
            print(f"Audio file saved: {audio_file}")
            return audio_file
        except NoCredentialsError:
            print("AWS credentials not found")
            return None
