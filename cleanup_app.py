
import sys

file_path = r'c:\Users\s-kam\OneDrive\デスクトップ\Antiguravity\現場研修\safejapan-training\App.js'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# delete lines from index 19 (line 20) to 393 (line 394)
# Note: lines are 0-indexed in list, so line 20 is index 19.
# Line 394 is index 393.
# We want to remove lines 20 through 394 inclusive.
del lines[19:394]

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Successfully deleted lines 20-394 from App.js")
