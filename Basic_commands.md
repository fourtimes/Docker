## Docker Basic Commands
```bash
# authourized a user for docker
sudo usermod -aG docker $USER

# To show docker version
docker version

# Pull a image from docker hub
docker pull (imageName)

# To show the image details
docker images

# Remove the specified image
docker rmi (imageName)

# Remove all the images
docker rmi $(docker images -a -q)

# create a container with port forwarding
docker run -d -p 80:80 --name (conatinerName) (imageName)

# Run a image, to create a container
docker run -d -it (imageName) bash
        [or]
docker create (imageName)
docker start (created_conName)

# Enter into the specified container
docker exec -it (imageName) bash

# To show running containers
docker ps

# To show all the containers
docker ps -a

# Removed unused data
docker system prune

# To start running container
docker start (containerName)

# To stop & kill running container
docker stop (containerName)
docker kill (containerName)

# To remove the specified container
docker rm (containerName)

# Show the created conatiner or images details
docker inspect (containerName) 
docker inspect (imageName)

# Push the image to docker hub
docker push (imageName)

# redis server in docker
docker run (redis-imgName)
docker exec -it (redis-imgName) redis-cli

# to create image from docker container
docker commit -c (CMD command depends on the docker image) (container-id)

ex: docker commit -c 'CMD ["redis-server"]' 05e2e08b48df

# Delete all containers using the following command:
docker rm -f $(docker ps -a -q)

# to view all the logs of the container
docker logs (containerName)

# Delete all volumes using the following command:
docker volume rm $(docker volume ls -q)
```
## Docker compose

```bash
# build the docker compose file
docker compose up  --build

# Restart the containers using the following command:
docker compose up -d

# Stop the container(s) using the following command:
docker compose down 
```
# Backup and Restore
```bash
# Save the specified image in local machine
docker save (imageName) > backup.tar

# Copying the file one machine to another machine
scp (copy file name) sepoy@ip_address:/home/sepoy

Examples:-
scp /home/ubuntu/Desktop/sql.sh crash@192.168.193.83:/home/crash/Desktop/ashli-project
```
