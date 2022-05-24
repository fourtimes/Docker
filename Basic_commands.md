# Docker Basic Commands

**Pull a image from docker hub**
```bash
sudo docker pull (image_name)
```
**To show the image details**
```bash
sudo docker images
```
**Remove the specified image**
```bash
sudo docker rmi (image_id)
```
**Remove all the images**
```bash
sudo docker rmi $(docker images -a -q)
```
**Run a image, to create a container**
```bash
sudo docker run -d -it (image_id) bash
```
**Enter into the specified container**
```bash
sudo docker exec -it (image_id) bash
```
**To show running containers**
```bash
sudo docker ps
```
**To show all the containers**
```bash
sudo docker ps -a
```
**Removed unused data**
```bash
sudo docker system prune
```
**To start running container**
```bash
sudo docker start (container_id)
```
**To stop running container**
```bash
sudo docker stop (container_id)
```
**To remove the specified container**
```bash
sudo docker rm (container_id)
```
**Show the created conatiner or images details**
```bash
sudo docker inspect (container_id) 
```          
```bash
sudo docker inspect (image_id)
```
**Push the image to docker hub**
```bash
sudo docker push (image_id)
```
**To show docker version**
```bash
sudo docker version
```

# Backup and Restore
**Save the specified image in local machine**
```bash
sudo docker save (image_id) > backup.tar
```
**Copying the file one machine to another machine**
```bash
scp (copy file name) sepoy@ip_address:/home/sepoy

Examples:-
scp /home/ubuntu/Desktop/sql.sh crash@192.168.193.83:/home/crash/Desktop/ashli-project
```
