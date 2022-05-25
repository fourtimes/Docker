FROM ubuntu

RUN apt update && apt install vsftpd -y

RUN useradd -m -s /bin/bash ashli

RUN echo "ashli:password" | chpasswd

RUN mkdir -p /etc/vsftpd/users /var/www/html/demo /var/run/vsftpd/empty

RUN chown -R ashli:ashli /var/www/html/demo

RUN echo "local_root=/var/www/html/demo" | tee -a /etc/vsftpd/users/ashli

RUN echo "ashli" | tee  /etc/vsftpd.chroot_list

COPY vsftpd.conf /etc/vsftpd.conf

RUN ln -sf /dev/stdout /var/log/nginx/demo.access.log \ 
        && ln -sf /dev/stderr /var/log/nginx/demo.error.log
        
CMD ["/usr/sbin/vsftpd","/etc/vsftpd.conf"]
