# Docker Installation On CentOS

**Set up the repository**
```bash
sudo yum install -y yum-utils

 sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```
<!-- 
**Enables the nightly repository**
```bash
 sudo yum-config-manager --enable docker-ce-nightly
 ```
 **To enable the test channel, run the following command:**
 ```bash
  sudo yum-config-manager --enable docker-ce-test
  ```
  **disables the nightly repository.**
  ```bash
   sudo yum-config-manager --disable docker-ce-nightly
   ``` -->
**Install Docker Engine**
```bash
 sudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin
 ```
