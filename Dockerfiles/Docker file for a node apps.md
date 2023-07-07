## Privilege Container (root user)

**_Dockerfile_**
```docker
# Root User by Dockerfile

FROM node:14
WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]
```
When we try implement this dockerfile using this command.
```sh
# build a docker image
docker build -t (imageName) .

# create a docker container
docker run -it -d -p 3000:3000 --name (containerName) (imageName)

# login to the docker container
docker exec -it (created containerName) (imageName)
```
Output:
----
![Image](https://github.com/januo-org/proof-of-concepts/assets/91359308/c73a4352-1599-44a0-8cbd-8d10f658ee35)

---

## Non - Privilege Container (non-root user)

**_Dockerfile_**
```docker
# Non-Root User by Dockerfile

FROM node:14
WORKDIR /application
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
USER node
CMD [ "node", "index.js" ]
```
When we try implement this dockerfile using this command.
```sh
# build a docker image
docker build -t (imageName) .

# create a docker container
docker run -it -d -p 3000:3000 --name (containerName) (imageName)

# login to the docker container
docker exec -it (created containerName) (imageName)
```
Output:
----
![Image](https://github.com/januo-org/proof-of-concepts/assets/91359308/31e5a9ec-9122-4b9e-ad57-2ed86b11767c)

