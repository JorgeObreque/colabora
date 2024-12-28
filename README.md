# Vite + Docker Project

This proyect uses [Vite](https://vitejs.dev/) as a development tool for modern frontend applications, and Docker to encapsulate its run environment.

## Previous requirements

Before starting, make sure you have the following programs installed on your system: 

- [Docker](https://www.docker.com/) and Docker Compose
- [Node.js](https://nodejs.org/) (optional, only if you plan to run the proyect locally)

## Proyect Structure

    /
    ├── Dockerfile
    ├── docker-compose.yml
    ├── app/ 
	    ├── node_modules
	    ├── public
		├── src
	    ├── package.json
	    ├── package-lock.json
	    ├── vite.config.js
	    ├── index.html
	    ├── ...
    ├── ...

## How to initialize Proyect

 
**Build Docker image and start container:** 

    docker compose build 
    docker compose up 