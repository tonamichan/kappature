import requests
import json

def run_query(query):
    # tarkov apiのサンプルコードコピペ
    headers = {"Content-Type": "application/json"}
    response = requests.post('https://api.tarkov.dev/graphql', headers=headers, json={'query': query})
    if response.status_code == 200:
        return response.json()["data"]["tasks"]
    else:
        raise Exception("Query failed to run by returning code of {}. {}".format(response.status_code, query))

def make_query(limit, offset):
    return f"""
    {{
        tasks(limit:{limit}, offset: {offset}) {{
        id
        tarkovDataId
        name
        trader {{
            name
        }}
        wikiLink
        minPlayerLevel
        taskRequirements {{
            task{{
            id
            name
            }}
            status
        }}
        factionName
        kappaRequired
        lightkeeperRequired
        }}
        }}
    """

limit = 50
offset = 0
last_id = "init"
tasks = []
while offset < 500: # 無限ループ予防で適当に500
    res = run_query(make_query(limit, offset))

    # 終われるなら終わる
    last_id = None if len(res) == 0 or res[-1]["id"] == last_id else res[-1]["id"]
    if last_id is None:
        break

    # 結果保持して次へ
    tasks += res
    offset += limit

with open('task-data/task.json', 'w') as f:
    json.dump({"data": tasks}, f, indent=4)
