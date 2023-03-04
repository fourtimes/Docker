## Docker Basic Commands
```bash
# authourized a user for docker
sudo usermod -aG docker dodo

# To show docker version
docker version

# Pull a image from docker hub
docker pull (image_name)

# To show the image details
docker images

# Remove the specified image
docker rmi (image_id)

# Remove all the images
docker rmi $(docker images -a -q)

# create a container with port forwarding
docker run -d -p 80:80 --name (conatiner-name) (image-name)

# Run a image, to create a container
docker run -d -it (image_id) bash
        [or]
docker create (image_name)
docker start (created_con_id)

# Enter into the specified container
docker exec -it (image_id) bash

# To show running containers
docker ps

# To show all the containers
docker ps -a

# Removed unused data
docker system prune

# To start running container
docker start (container_id)

# To stop & kill running container
docker stop (container_id)
docker kill (container_id)

# To remove the specified container
docker rm (container_id)

# Show the created conatiner or images details
docker inspect (container_id) 
docker inspect (image_id)

# Push the image to docker hub
docker push (image_id)

# redis server in docker
docker run (redis-img-name)
docker exec -it (redis-img-name) redis-cli

# to create image from docker container
docker commit -c (CMD command depends on the docker image) (container-id)

ex: docker commit -c 'CMD ["redis-server"]' 05e2e08b48df

```
## Docker compose

```bash
# build the docker compose file
docker compose up  --build

# start the docker compose file using daemon mode
docker compose up -d

# down container
docker compose down 
```
# Backup and Restore
```bash
# Save the specified image in local machine
docker save (image_id) > backup.tar

# Copying the file one machine to another machine
scp (copy file name) sepoy@ip_address:/home/sepoy

Examples:-
scp /home/ubuntu/Desktop/sql.sh crash@192.168.193.83:/home/crash/Desktop/ashli-project
```
