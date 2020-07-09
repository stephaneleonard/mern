# MyMernStack
A Docker mern stack based on this article (https://dev.to/sujaykundu777/utilizing-the-power-of-docker-while-building-mern-apps-using-mern-docker-4olb)

## What's changed compare to the article?

This project is only to learn how to build a mern stack with docker but I've fixed a bug that occured with react sript 3.4.1 that stopped the client from being launched

## What's inside?
- a client side with an already created base react project
- a server side with node js and already connected to mongoDB

## How to run?

in the folder, *run docker-compose up --build* this will rebuild the server and client (if you have updated dependecies) and start all the containers

## where to go?

### in development:
- localhost for the client
- localhost:3000 for the server
### in production:
 - loalhost:3000
 
## How to change from dev to prod?
copy the code from docker-compose.prod.yml inside the docker-compose.yml and run docker-compose up --build.
