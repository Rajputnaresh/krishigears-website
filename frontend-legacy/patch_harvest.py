import re
with open('/Users/rajputnaresh/.hermes/scripts/harvest.py', 'r') as f:
    content = f.read()

replacement = """        idx_path = os.path.join(pdir, "_index.md")
        if os.path.exists(idx_path):
            try:
                os.unlink(idx_path)
            except OSError:
                pass
        with open(idx_path, "w", encoding="utf-8") as fh:"""

content = content.replace('        with open(os.path.join(pdir, "_index.md"), "w", encoding="utf-8") as fh:', replacement)

with open('/Users/rajputnaresh/.hermes/scripts/harvest.py', 'w') as f:
    f.write(content)
