from scenarios.restaurant import RestaurantScenario
from services.translation import TranslationService


class ConversationService:
    def __init__(self, deepseek_client, gtts_client):
        self.deepseek_client = deepseek_client
        self.gtts_client = gtts_client
        self.translation_service = TranslationService(deepseek_client)

    async def converse(self, scenario_name: str, user_input: str):
        # Créer une instance de scénario
        scenario = RestaurantScenario()
        system_prompt = scenario.get_system_prompt("start")

        # Générer une réponse avec Deepseek
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_input},
        ]
        response_text = await self.deepseek_client.completion(messages)

        # Convertir la réponse en audio
        audio_path = await self.gtts_client.convert_text_to_audio(response_text)

        # Traduire la réponse en anglais
        translation = await self.translation_service.translate_to_english(response_text)

        return {
            "text": response_text,
            "translation": translation,
            "audio_path": audio_path,
        }
