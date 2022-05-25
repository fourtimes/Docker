FROM ubuntu

RUN apt update && apt install vsftpd -y

RUN useradd -m -s /bin/bash ashli

RUN echo "ashli:password" | chpasswd

RUN mkdir -p /etc/vsftpd/users /var/www/html/fourtimes.ml /var/run/vsftpd/empty

RUN chown -R ashli:ashli /var/www/html/fourtimes.ml

RUN echo "local_root=/var/www/html/fourtimes.ml" | tee -a /etc/vsftpd/users/ashli

RUN echo "ashli" | tee  /etc/vsftpd.chroot_list

COPY vsftpd.conf /etc/vsftpd.conf

# RUN touch /var/log/vsftpd.log

# RUN ln -sf /dev/stdout /var/log/vsftpd.log
       
CMD ["/usr/sbin/vsftpd","/etc/vsftpd.conf"]

# vsftpd creation in local machine
sudo apt update && apt install vsftpd -y
sudo useradd -m -s /bin/bash ashli
echo "ashli:password" | sudo chpasswd
sudo mkdir -p /etc/vsftpd/users /var/www/html/fourtimes.ml /var/run/vsftpd/empty
sudo chown -R ashli:ashli /var/www/html/fourtimes.ml
echo "local_root=/var/www/html/fourtimes.ml" | sudo tee -a /etc/vsftpd/users/ashli
echo "ashli" | sudo tee /etc/vsftpd.chroot_list
vim /etc/vsftpd.conf

# listen=YES
# listen_ipv6=NO
# anonymous_enable=NO
# local_enable=YES
# write_enable=YES
# local_umask=022
# dirmessage_enable=YES
# use_localtime=YES
# xferlog_enable=YES
# connect_from_port_20=YES
# xferlog_file=/var/log/vsftpd.log
# xferlog_std_format=NO
# idle_session_timeout=600
# data_connection_timeout=120
# ascii_upload_enable=YES
# ascii_download_enable=YES
# ftpd_banner=Welcome to fourtimes.ml FTP service.
# chroot_local_user=NO
# chroot_list_enable=YES
# user_config_dir=/etc/vsftpd/users
# allow_writeable_chroot=YES
# secure_chroot_dir=/var/run/vsftpd/empty
# pam_service_name=vsftpd
# rsa_cert_file=/etc/ssl/certs/ssl-cert-snakeoil.pem
# rsa_private_key_file=/etc/ssl/private/ssl-cert-snakeoil.key
# ssl_enable=NO
# chroot_list_file=/etc/vsftpd.chroot_list

sudo systemctl start vsftpd