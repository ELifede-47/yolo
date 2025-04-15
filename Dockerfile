FROM ubuntu:latest
RUN apt update
RUN apt install nginx -y
EXPOSE 80
ENTRYPOINT ["echo","Container created"]
