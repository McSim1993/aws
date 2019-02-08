#!/bin/bash
if ! [[ -d lib/nginx-1.15.1 && -d lib/nginx-rtmp-module-dev ]];
then
	rm -rf lib
	mkdir lib
	sh download_libs.sh
fi

IMAGE_ID=$(docker build -q . | awk -F: '{ print $2 }')

echo $IMAGE_ID

docker stop rtmp
docker container rm rtmp
docker run -d -p 1935:1935 --network=aws_network --name=rtmp $IMAGE_ID