import re

# Read the blog content
with open('blog_content.py', 'r') as f:
    local_vars = {}
    exec(f.read(), {}, local_vars)
    CONTENT_MAP = local_vars['CONTENT_MAP']

with open('seed_blog.py', 'r') as f:
    original = f.read()

for slug, content in CONTENT_MAP.items():
    escaped_content = content.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
    pattern = r'("slug":\s*"' + slug + r'"[\s\S]*?"content":\s*")([\s\S]*?)("\s*,?\s*})'
    
    def replacer(match):
        return match.group(1) + escaped_content + match.group(3)
        
    original = re.sub(pattern, replacer, original)

with open('seed_blog.py', 'w') as f:
    f.write(original)

print('Updated seed_blog.py successfully')
