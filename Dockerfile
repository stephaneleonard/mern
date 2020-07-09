# Production Build

# Stage 1: Build react client
FROM node:latest as client

# Working directory be app
WORKDIR /usr/app/client/

COPY client/package*.json ./

# Install dependencies
RUN yarn install

# copy local files to app folder
COPY client/ ./
RUN ls

RUN yarn build

# Stage 2 : Build Server

FROM node:10.16-alpine

WORKDIR /usr/src/app/
COPY --from=client /usr/app/client/build/ ./client/build/
RUN ls

WORKDIR /usr/src/app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]