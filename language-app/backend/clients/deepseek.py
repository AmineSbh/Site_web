import os
from openai import OpenAI


class DeepseekClient:
    def __init__(self):
        self.client = OpenAI(
            base_url="https://openrouter.ai/api/v1",
            api_key=os.getenv("DEEPSEEK_KEY"),
        )

    async def completion(self, messages):
        try:
            response = self.client.chat.completions.create(
                messages=messages,
                model="deepseek/deepseek-chat",
                temperature=0.7,
                max_tokens=100,
            )
            print("Connected to Deepseek!")
            return response.choices[0].message.content
        except Exception as e:
            print(f"Error connecting to Deepseek: {e}")
            return None
