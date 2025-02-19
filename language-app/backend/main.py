from fastapi import FastAPI
from pydantic import BaseModel
import openai
import pyttsx3

app = FastAPI()

openai.api_key = "TA_CLE_OPENAI"


class SpeechInput(BaseModel):
    text: str


@app.post("/speak")
async def generate_response(data: SpeechInput):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "Tu es un assistant d'apprentissage des langues.",
            },
            {"role": "user", "content": data.text},
        ],
    )
    answer = response["choices"][0]["message"]["content"]

    # Convertir le texte en audio
    engine = pyttsx3.init()
    engine.say(answer)
    engine.runAndWait()

    return {"response": answer}
