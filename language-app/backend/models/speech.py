from pydantic import BaseModel


class SpeechInput(BaseModel):
    text: str
