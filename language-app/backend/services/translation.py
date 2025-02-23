class TranslationService:
    def __init__(self, deepseek_client):
        self.deepseek_client = deepseek_client

    async def translate_to_english(self, german_text: str):
        system_prompt = "You are a German to English translator. Translate the following German text to English. Only respond with the English translation, nothing else."
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": german_text},
        ]
        response = await self.deepseek_client.completion(messages)
        return response
