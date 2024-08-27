import requests

url = "http://localhost:3000/api/"

for i in range(150):  # Lakukan 150 permintaan
    response = requests.get(url)
    print(f"Request {i+1}: Status Code {response.status_code}")
    print(response.text)
