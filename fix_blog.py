import re

for filepath in ["frontend/src/pages/Blog.jsx", "frontend/src/pages/BlogPost.jsx"]:
    with open(filepath, "r") as f:
        text = f.read()
    
    # We will just remove the entire object containing "brush-cutter-maintenance"
    # Actually, simpler to just replace "Brush Cutter" with "Power Weeder" and slightly tweak the copy
    text = text.replace("Brush Cutter Maintenance", "Power Weeder Maintenance")
    text = text.replace("Brush Cutter", "Power Weeder")
    text = text.replace("brush cutter", "power weeder")
    text = text.replace("brush-cutter", "power-weeder")

    with open(filepath, "w") as f:
        f.write(text)

