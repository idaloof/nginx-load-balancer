# Using NGINX as a load balancer

This repo is created to test how to use NGINX as a load balancer together with Docker and and a very simple server application using Express js.

The idea is to distribute requests and load across multiple instances of the server application.

With docker compose, you are setting up three containers. Two server containers and one nginx container.

# Prerequisites

* Node/Npm
* Docker

# NGINX conf

The configuration file for nginx (nginx.conf) configures which server urls to distribute the load to, in a round robin manner.

If you would like to change the ports, don't forget to change the ports in the docker-compose file aswell.

# How to use

Clone the repo:

```git clone https://github.com/idaloof/nginx-load-balancer.git```

Install express:

```npm install```

Build images and run the containers:

```docker-compose up --build```

Open a browser (preferably in incognito mode) and go to:

```localhost:80```

If you refresh the page, you should see the port number changing. This is the idea behind load balancing, where NGINX distributes the requests across the different servers.