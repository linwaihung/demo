### Introduction
This demo will run nginx as a revese proxy and redirect the traffic from https://localhost/ to the app1, app2 and app3 in the docker containers

### How to start
docker build -t myapp:1.0 .
docker compose up -d
Start brwoser on https://localhost/

### Reference
https://www.youtube.com/watch?v=q8OleYuqntY&t=1648s
