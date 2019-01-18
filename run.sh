#!/bin/sh
docker run -it -p 1935:1935 -p 80:80 $1 /bin/bash