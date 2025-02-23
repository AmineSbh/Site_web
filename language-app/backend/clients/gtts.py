import os
from gtts import gTTS

class GTTSClient:
    def __init__(self, language="de"):
        self.language = language

    async def convert_text_to_audio(self, text):
        try:
            audio_file = f"./audio/{os.urandom(16).hex()}.mp3"
            tts = gTTS(text, lang=self.language)
            tts.save(audio_file)
            print(f"Audio file saved: {audio_file}")
            return audio_file
        except Exception as e:
            print(f"Error converting text to audio: {e}")
            return None