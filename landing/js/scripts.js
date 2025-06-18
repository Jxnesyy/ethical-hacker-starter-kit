# JS content
js_dir = os.path.join(base_dir, 'js')
os.makedirs(js_dir, exist_ok=True)
js_content = """// landing/js/scripts.js
console.log("Landing page JS loaded");
"""
with open(os.path.join(js_dir, 'scripts.js'), 'w') as f:
    f.write(js_content)
