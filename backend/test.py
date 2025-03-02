# import requests

# url = "http://localhost:8000/api/users/profile/"
# headers = {
#     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQxMDA5MjM2LCJpYXQiOjE3NDA5MjI4MzYsImp0aSI6ImY4MDEzZWY2NTI0YjRlZDNhNWRiNjg0YmMwYjkzYTRlIiwidXNlcl9pZCI6MSwidXNlcl90eXBlIjoiIiwibmFtZSI6Ik1hbmdlc2ggR2hhdGthbWJsZSJ9.J8PtTyNVPac-3DX3Pic7iWYLb9fWeSlnLWpQswlWhw4",
#     "Accept": "application/json"
# }

# response = requests.get(url, headers=headers)
# print(response.text)

import requests

url = "http://localhost:8000/api/users/profile/create/"

headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQxMDA5MjM2LCJpYXQiOjE3NDA5MjI4MzYsImp0aSI6ImY4MDEzZWY2NTI0YjRlZDNhNWRiNjg0YmMwYjkzYTRlIiwidXNlcl9pZCI6MSwidXNlcl90eXBlIjoiIiwibmFtZSI6Ik1hbmdlc2ggR2hhdGthbWJsZSJ9.J8PtTyNVPac-3DX3Pic7iWYLb9fWeSlnLWpQswlWhw4",
    "Accept": "application/json",
    "Content-Type": "application/json"
}

data = {
    "address": "123 Main Street",
    "date_of_birth": "1990-01-01"
}

response = requests.post(url, headers=headers, json=data)

print(response.status_code)
print(response.json())
