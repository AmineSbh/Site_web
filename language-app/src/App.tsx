import React, { useState } from "react";
import axios from "axios";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"; // ✅ Import correct

function App() {
  const [response, setResponse] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  // Fonction pour démarrer l'écoute
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "fr-FR" });
  };

  // Fonction pour arrêter l'écoute
  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  // Fonction pour envoyer la transcription au backend
  const handleSend = async () => {
    if (transcript) {
      try {
        const res = await axios.post("http://127.0.0.1:8000/speak", { text: transcript });
        setResponse(res.data.response);
      } catch (error) {
        console.error("Erreur lors de l'envoi :", error);
      }
    }
  };

  // Vérifie si le navigateur supporte la reconnaissance vocale
  if (!browserSupportsSpeechRecognition) {
    return <div>Votre navigateur ne supporte pas la reconnaissance vocale.</div>;
  }

  // Vérifie si le microphone est disponible
  if (!isMicrophoneAvailable) {
    return <div>Veuillez autoriser l'accès au microphone.</div>;
  }

  return (
    <div className="app">
      <h1>🗣️ Apprends une langue en parlant</h1>
      {/* <button onMouseDown={startListening} onMouseUp={stopListening}>
        {listening ? "🎤 Parlez..." : "🎙️ Appuyez pour parler"}
      </button>
      <p>{transcript}</p>
      <button onClick={handleSend}>Envoyer</button>
      <p>🤖 Réponse : {response}</p> */}
    </div>
  );
}

export default App;
