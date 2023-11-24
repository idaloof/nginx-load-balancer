# Using NGINX as load balancer

If you've built a system and are wondering if your system can handle many users and requests, you would want to test the system's capabilities. In that case this approach could be a way to do that.

Maybe you've stumbled upon the term load balancing. Briefly described, a load balancer distributes requests across multiple server instances to ensure that your system is reliable, both in terms of requests per second and response times.

The idea behind this repo is to set up the possibility to load your server with requests from a number of simultaneous users, both with and without a load balancer.

## Locust - An open source load testing tool.

Locust is used to swarm the server with requests. It's easy to configure with a python script and the UI (located at localhost:8089) is user friendly. All you have to do is to choose the amount of users and the swarm rate. Choosing a test duration is optional, but recommendable as you might want the same configuration for every test. Locust also provides you with charts and the possibility to download test reports.

The Locust configuration is the simplest of kinds. For more advanced configurations visit:

https://docs.locust.io/en/stable/

## Repo content

The contents of the repo (high level):

- An express server with one endpoint ```/users``` where user data for 1000 users is fetched from MariaDB (credit: Pontus Åkerberg)
- 

## Start testing
The repo contains two different test setups, one with and one without load balancing with NGINX.

### Without NGINX

The ```locust``` directory contains a python file and a Dockerfile for testing the server without NGINX.

Use the following commands to run and close the containers and images:

Run: ```docker-compose -f docker-compose-no-load.yml up --build```

Go to ```localhost:8089``` and start swarming!

Close: ```docker-compose -f docker-compose-no-load.yml down --rmi all```

### With NGINX
The ```locust_nginx``` directory contains a python file and a Dockerfile for testing the server with NGINX.

Use the following commands to run and close the containers and images:

Run: ```docker-compose -f docker-compose.yml up --build```

Go to ```localhost:8089``` and start swarming!

Close: ```docker-compose down --rmi all```



This repo is created to test how to use NGINX as a load balancer together with Docker and a very simple server application using Express js.

The idea is to distribute requests and load across multiple instances of the server application.

With docker compose, you are setting up three containers. Two server containers and one nginx server container.

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

You can also use the curl command to access the NGINX server:

```curl -s localhost:80```

Repeat the command to see NGINX in action.

# How to shut down

To shut down all servers, remove containers and remove images use:

```docker-compose down --rmi all```