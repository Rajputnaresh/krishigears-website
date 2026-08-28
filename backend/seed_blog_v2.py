"""Merge all blog batch JSON files into a single seed_blog.py BLOG_POSTS array.
Run this once to generate the final seed file.
"""
import json
import glob

all_posts = []
for batch_file in sorted(glob.glob("backend/blog_batch_*.json")):
    with open(batch_file, "r") as f:
        posts = json.load(f)
        all_posts.extend(posts)

# Generate seed_blog.py content
output = '"""Seed blog posts for KrishiGears — Power Weeder B2B content.\n'
output += 'Inserted idempotently on backend startup if they don\'t exist yet.\n"""\n\n'
output += 'BLOG_POSTS = [\n'

for post in all_posts:
    # Build FAQ content as part of the article
    faq_section = ""
    if post.get("faqs"):
        faq_section = "\n\n## Frequently Asked Questions\n\n"
        for faq in post["faqs"]:
            faq_section += f"**Q: {faq['question']}**\n\n{faq['answer']}\n\n"
    
    full_content = post["content"] + faq_section
    
    output += '    {\n'
    output += f'        "slug": {json.dumps(post["slug"])},\n'
    output += f'        "title": {json.dumps(post["title"])},\n'
    output += f'        "excerpt": {json.dumps(post["excerpt"])},\n'
    output += f'        "cover_image": "/assets/blog/field-tractor.jpg",\n'
    output += f'        "tags": {json.dumps(post["tags"])},\n'
    output += f'        "content": {json.dumps(full_content)},\n'
    output += '    },\n'

output += ']\n'

with open("backend/seed_blog.py", "w") as f:
    f.write(output)

print(f"Generated seed_blog.py with {len(all_posts)} articles")
