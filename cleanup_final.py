
import sys

file_path = r'c:\Users\s-kam\OneDrive\デスクトップ\Antiguravity\現場研修\safejapan-training\App.js'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# lines[:12] is index 0-11 (Line 1-12)
# lines[395:] is index 395-end (Line 396-end)
new_lines = lines[:12] + ["\n// Externalized DRILL_DATA\n"] + lines[395:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"Successfully cleaned up App.js. Kept {len(new_lines)} lines.")
