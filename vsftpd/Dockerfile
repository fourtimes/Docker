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

