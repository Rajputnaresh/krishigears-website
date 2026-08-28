import os
import re

directory = 'src'

replacements = [
    (r'\bbg-zinc-950\b', 'bg-white dark:bg-zinc-950'),
    (r'\bbg-zinc-900\b', 'bg-zinc-50 dark:bg-zinc-900'),
    (r'\bbg-\[\#080808\]\b', 'bg-zinc-50 dark:bg-[#080808]'),
    (r'\bbg-\[\#141414\]\b', 'bg-white dark:bg-[#141414]'),
    (r'\bborder-zinc-900\b', 'border-zinc-100 dark:border-zinc-900'),
    (r'\bborder-zinc-800\b', 'border-zinc-200 dark:border-zinc-800'),
    (r'\bborder-zinc-700\b', 'border-zinc-300 dark:border-zinc-700'),
    (r'\btext-zinc-500\b', 'text-zinc-500 dark:text-zinc-500'), # Keep this one close, maybe zinc-500 is same
    (r'\btext-zinc-400\b', 'text-zinc-600 dark:text-zinc-400'),
    (r'\btext-zinc-300\b', 'text-zinc-700 dark:text-zinc-300'),
    (r'\btext-zinc-200\b', 'text-zinc-800 dark:text-zinc-200'),
    (r'\btext-white\b', 'text-zinc-900 dark:text-white'),
    (r'\btext-black\b', 'text-zinc-50 dark:text-black'),
    # Fix gradients
    (r'\bfrom-black/90\b', 'from-white/90 dark:from-black/90'),
    (r'\bvia-black/70\b', 'via-white/70 dark:via-black/70'),
    (r'\bvia-black/40\b', 'via-white/40 dark:via-black/40'),
    (r'\bfrom-black\b', 'from-white dark:from-black'),
    # Note: this might duplicate classes if run twice, so we will only run it once.
]

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
                
            original_content = content
            for pattern, replacement in replacements:
                # We need to make sure we don't replace if already prefixed with dark:
                # Actually, simpler: just do straight replace, then deduplicate if necessary,
                # but since we're only running this once, it's fine.
                # To prevent replacing "dark:bg-zinc-950" with "dark:bg-white dark:bg-zinc-950",
                # we use negative lookbehind.
                regex = r'(?<!dark:)' + pattern
                content = re.sub(regex, replacement, content)
                
            if content != original_content:
                with open(filepath, 'w') as f:
                    f.write(content)
                print(f"Updated {filepath}")
