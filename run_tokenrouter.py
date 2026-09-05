import os
from openai import OpenAI

def test_tokenrouter():
    api_key = os.environ.get("TOKENROUTER_API_KEY", "sk-09HL3oM0R7PfrSyA7JdSnwqltBh2m6thGhzXSFbjfSki5UaC")
    
    print(f"Connecting to TokenRouter with model: z-ai/glm-5.3-free")
    
    client = OpenAI(
        base_url='https://api.tokenrouter.com/v1',
        api_key=api_key,
    )

    messages = [
        {"role": "system", "content": "You are an intelligent assistant, please reply concisely."},
        {"role": "user", "content": "Hello, confirm your model name."},
    ]

    try:
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
        print("\nSuccess! Response received:")
        print(full_content)
    except Exception as e:
        print(f"\nError occurred: {e}")

if __name__ == "__main__":
    test_tokenrouter()
