import os
import re

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Find class strings (simplified: anything between quotes or backticks that contains bg-lime-500)
    # We will replace text-zinc-50, text-zinc-500, text-white with text-black if bg-lime-500 is in the same string
    
    def replace_in_match(m):
        class_str = m.group(0)
        if 'bg-lime-500' in class_str:
            class_str = re.sub(r'\btext-zinc-50\b', 'text-black', class_str)
            class_str = re.sub(r'\btext-zinc-500\b', 'text-zinc-900', class_str)
            class_str = re.sub(r'\btext-white\b', 'text-black', class_str)
        return class_str

    # Match class="...", className="...", or className={`...`}
    # This regex is a bit greedy but should work for CSS class strings
    new_content = re.sub(r'className=["\']([^"\']+)["\']', replace_in_match, content)
    new_content = re.sub(r'className=\{`([^`]+)`\}', replace_in_match, new_content)
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Fixed {filepath}")

for root, _, files in os.walk('.'):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js'):
            fix_file(os.path.join(root, file))
