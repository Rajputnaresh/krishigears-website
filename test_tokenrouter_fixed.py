import os
from openai import OpenAI

# TokenRouter requires an API key even for free tier models.
# Make sure TOKENROUTER_API_KEY is set in your environment, or replace with your key string.
api_key = os.environ.get("TOKENROUTER_API_KEY", "your_tokenrouter_api_key_here")

client = OpenAI(
    base_url='https://api.tokenrouter.com/v1',
    api_key=api_key,
)

messages = [
    {"role": "system", "content": "You are an intelligent assistant, please reply concisely."},
    {"role": "user", "content": "Hello, what kind of model are you?"},
]

try:
    # Use the verified active free model on TokenRouter
    stream = client.chat.completions.create(
        model="z-ai/glm-5.3-free",
        messages=messages,
        stream=True,
        stream_options={"include_usage": True},
    )

    content_parts = []
    for chunk in stream:
        if chunk.choices:
            delta = chunk.choices[0].delta
            if delta and delta.content:
                content_parts.append(delta.content)

    full_content = "".join(content_parts)
    print("Response:", full_content)
except Exception as e:
    print(f"API Error: {e}")
