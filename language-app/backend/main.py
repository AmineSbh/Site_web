import os
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from clients.deepseek import DeepseekClient
from clients.gtts import GTTSClient
from services.audio_to_text import AudioToTextService
from services.conversation import ConversationService
from models.speech import SpeechInput

# Charger les variables d'environnement
load_dotenv()

# Initialiser l'application FastAPI
app = FastAPI()

# Configurer CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Autoriser uniquement cette origine
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Méthodes HTTP autorisées
    allow_credentials=True,  # Autoriser les cookies et les credentials
)

# Initialiser les clients
deepseek_client = DeepseekClient()
gtts_client = GTTSClient()
audio_to_text_service = AudioToTextService(api_key=os.getenv("AUDIO_API_KEY"))
conversation_service = ConversationService(deepseek_client, gtts_client)


# Route pour gérer les fichiers audio
@app.post("/converse/audio")
async def converse_audio(scenario_name: str, audio: UploadFile = File(...)):
    try:
        # Sauvegarder le fichier audio temporairement
        audio_path = f"./uploads/{audio.filename}"
        with open(audio_path, "wb") as buffer:
            buffer.write(await audio.read())

        # Convertir l'audio en texte
        transcribed_text = await audio_to_text_service.convert_audio_to_text(audio_path)

        # Générer une réponse
        response = await conversation_service.converse(scenario_name, transcribed_text)

        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Route pour gérer les entrées texte
@app.post("/converse/text")
async def converse_text(data: SpeechInput):
    try:
        response = await conversation_service.converse(data.scenario_name, data.text)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Démarrer le serveur
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
