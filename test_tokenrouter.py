from openai import OpenAI
import os

client = OpenAI(
    base_url='https://api.tokenrouter.com/v1',
    api_key=os.environ.get('TOKENROUTER_API_KEY', '<YOUR_API_KEY>'),
)

messages = [
    {"role": "system", "content": "You are an intelligent assistant, please reply concisely."},
    {"role": "user", "content": "Hello, what kind of model are you?"},
]

try:
    stream = client.chat.completions.create(
        model="moonshotai/kimi-k3-free",
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
    print(full_content)
except Exception as e:
    print(f"Error: {e}")
