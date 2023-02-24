## Docker Basic Commands
```bash
# Pull a image from docker hub
sudo docker pull (image_name)

# To show the image details
sudo docker images

# Remove the specified image
sudo docker rmi (image_id)

# Remove all the images
sudo docker rmi $(docker images -a -q)

# Run a image, to create a container
sudo docker run -d -it (image_id) bash
        [or]
sudo docker create (image_name)
sudo docker start (created_con_id)

# Enter into the specified container
sudo docker exec -it (image_id) bash

# To show running containers
sudo docker ps

# To show all the containers
sudo docker ps -a

# Removed unused data
sudo docker system prune

# To start running container
sudo docker start (container_id)

# To stop running container
sudo docker stop (container_id)

# To remove the specified container
sudo docker rm (container_id)

# Show the created conatiner or images details
sudo docker inspect (container_id) 
sudo docker inspect (image_id)

# Push the image to docker hub
sudo docker push (image_id)

# To show docker version
sudo docker version
```

# Backup and Restore
```bash
# Save the specified image in local machine
sudo docker save (image_id) > backup.tar

# Copying the file one machine to another machine
scp (copy file name) sepoy@ip_address:/home/sepoy

Examples:-
scp /home/ubuntu/Desktop/sql.sh crash@192.168.193.83:/home/crash/Desktop/ashli-project
```
