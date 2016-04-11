FROM mhart/alpine-node:5.10.1
MAINTAINER hsingh23@illinois.edu
RUN npm install -g twilio
ADD keep-alive .
ENTRYPOINT node keepalive.js