#!/bin/bash
IMAGE_ID=$(docker build -q . | awk -F: '{ print $2 }')

echo $IMAGE_ID

docker stop my_lb
docker container rm my_lb
docker run -d -p 80:80 --network=aws_network --name my_lb $IMAGE_ID