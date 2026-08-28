import json

# Read the massive sitemap/generation data or fetch it again
import urllib.request
print("Fetching States...")
req = urllib.request.Request("https://raw.githubusercontent.com/hiiamrohit/Countries-States-Cities-database/master/states.json", headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    states_data = json.loads(response.read().decode())['states']
india_states = {s['id']: s['name'] for s in states_data if s['country_id'] == '101'}

print("Fetching Cities...")
req = urllib.request.Request("https://raw.githubusercontent.com/hiiamrohit/Countries-States-Cities-database/master/cities.json", headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    cities_data = json.loads(response.read().decode())['cities']

city_state_map = {}
for c in cities_data:
    if c['state_id'] in india_states:
        city_name = c['name'].strip()
        state_name = india_states[c['state_id']].replace(" and ", " & ")
        city_slug = city_name.lower().replace(" ", "-").replace("'", "").replace(".", "")
        city_state_map[city_slug] = {"city": city_name, "state": state_name}

# Write a tiny JS file
js_content = f"export const CITY_STATE_MAP = {json.dumps(city_state_map, ensure_ascii=False)};\n"
with open("frontend/src/data/cityStateMap.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Generated CITY_STATE_MAP with {len(city_state_map)} entries.")
