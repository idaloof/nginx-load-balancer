# Using NGINX as load balancer

Thanks to Pontus Åkerberg @p0ntan for his contribution regarding the MariaDB part of this repo.

If you've built a system and your're wondering if your system can handle many users and requests, you would want to test the system's capabilities before deploying. In that case this approach could be a way to do that.

Maybe you've stumbled upon the term load balancing. Briefly described, a load balancer distributes requests across multiple server instances to ensure that your system is reliable, both in terms of requests per second, response times and the number of failed requests.

The idea behind this repo is to set up the possibility to load your server with requests from a number of simultaneous users, both with and without a load balancer.

## Locust - An open source load testing tool.

Locust is used to swarm the server with requests. It's easy to configure with a python script and the UI (located at localhost:8089) is user friendly. All you have to do is to choose the amount of users and the swarm rate. Choosing a test duration is optional, but recommendable as you might want the same configuration for every test. Locust also provides you with charts and the possibility to download test reports.

The Locust configuration is the simplest of kinds. For more advanced configurations visit:

https://docs.locust.io/en/stable/

## Repo content

Study these parts of the repo to get a better understanding:

- nginx directory --> this is where you configure your NGINX server in using the nginx.conf file
- locust directories --> this is where you configure the Locus python files

Remember that everything is tied together. For example, a change of ports in the docker-compose file (NGINX) must be followed by
corresponding changes in the nginx.conf file.

In these repo, two instances of the server have been used to balance the load between. It is possible to add more server instances. Just add more services in the docker-compose file and add the ports to the nginx.conf file.


# How to use

Clone the repo:

```git clone https://github.com/idaloof/nginx-load-balancer.git```

Install server dependencies:

```npm install```

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

# Results

## Test configuration

Users: 3000
Spawn rate: 100
Test duration: 2 minutes

You can see the results below.

## With NGINX

![Locus Test Report - tables](./img/image.png)

![Locus Test Report - charts](./img/image3.png)

## Without NGINX

![Locus Test Report - tables](./img/image4.png)

![Locus Test Report - charts](./img/image5.png)

# Conclusion

Although the amount of requests per second were higher when not balancing the load with NGINX, there were two important aspects that were positive with using NGINX:

## Response times

The average response times for 90% of the requests were down to one seventh of the response times when not using NGINX.

## Fail count

The failed requests per second were fifteen times higher when not balancing the load with NGINX.

# Summary

The results were a bit surprising. we had hoped that using NGINX would have positive effects in all aspects. Even though the requests per second were lower, the overall results point toward using NGINX.

With regards to the ease of use and the possibility to add more configuration options to both NGINX and Locust, they are both recommendable tools for balancing load and load testing.

There are several modules/libraries out there that can help you balance the server load. This is just one of them. Which one you use, is up to you and you team's preferences.

Hope you found the repo and the study interesting!

Cheers

Vteam group 2