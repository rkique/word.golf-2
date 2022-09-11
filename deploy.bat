docker build -t sparrow .
aws lightsail push-container-image --service-name orca-service --label s --image sparrow
py change_container_number.py
aws lightsail create-container-service-deployment --service-name orca-service --containers file://containers.json --public-endpoint file://public-endpoint.json


