import re

with open("frontend/src/data/catalog.js", "r") as f:
    content = f.read()

# Filter CATEGORIES
cat_regex = r"export const CATEGORIES = \[(.*?)\];"
cats = re.search(cat_regex, content, re.DOTALL).group(1)
new_cats = """
  { slug: "power-weeders", name: "Power Weeders", icon: Tractor, image: COVER.weeder },
  { slug: "power-weeder-spare-parts", name: "Power Weeder Spare Parts", icon: Wrench, image: COVER.crankshaft },
"""
content = re.sub(cat_regex, f"export const CATEGORIES = [{new_cats}];", content, flags=re.DOTALL)

# Let's just manually generate the new file to avoid regex parsing issues on huge files
