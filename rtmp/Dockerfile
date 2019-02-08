FROM ubuntu:latest

WORKDIR /

RUN apt-get update && apt-get install build-essential libpcre3 libpcre3-dev libssl-dev unzip zlib1g-dev -y

COPY lib/nginx-1.15.1/ /nginx-1.15.1
COPY lib/nginx-rtmp-module-dev/ /nginx-rtmp-module-dev

RUN cd nginx-1.15.1 && ./configure --with-http_ssl_module --add-module=../nginx-rtmp-module-dev \
	&& make && make install && mkdir -p /tmp/hls && ln -s /usr/local/nginx/sbin/nginx /usr/local/bin/nginx

COPY nginx.conf /usr/local/nginx/conf/nginx.conf

CMD nginx