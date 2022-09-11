import json
data = { "flask": {
        "image": ":orca-service.s.29",
        "ports": {
            "5000": "HTTP"
        }
    }}

with open('containers.json', 'r+') as f:
    data = json.load(f)

data["flask"]["image"] = ":orca-service.s." + str(int(data["flask"]["image"][-3:]) + 1)

with open('containers.json', 'w') as f:
    json.dump(data, f)
    