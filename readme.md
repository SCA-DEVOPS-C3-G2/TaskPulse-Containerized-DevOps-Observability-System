# Installation

Run the following command to clone the repository

```
USING SSH
git clone git@github.com:SCA-DEVOPS-C3-G2/TaskPulse-Containerized-DevOps-Observability-System.git

USING HTTP

git clone https://github.com/SCA-DEVOPS-C3-G2/TaskPulse-Containerized-DevOps-Observability-System.git
```

Go to `frontend` and `backend` directory to install packages

```
cd frontend
npm install
```

```
cd backend
npm install
```

# Configuration

Create `.env` file inside `backend` directory and copy the following code

```
MONGO_URI=Your mongodb URI
GMAIL_USERNAME=your gmail address
GMAIL_PASSWORD=password created inside 'App Password' section under google accounts setting
PORT=8000
JWT_SECRET=a random secret key eg. thisisasecretkey
BASE_URL= "http://localhost:3000"
```

# Run the App

Go to `backend` and `frontend` directory and start the server

```
cd backend
nodemon server
```

```
cd frontend
npm start
```

# Live Preview

Check live preview here [https://todo-app-b96a5.web.app/](https://todo-app-b96a5.web.app/)



## Dockerization

This project was containerized to ensure consistent development and deployment across environments. The goal is to run the full stack application (frontend, backend, and database) using Docker.

---

### Overview

The application is divided into three services:

* **Frontend** – React app served via Nginx (Port 3000)
* **Backend** – Node.js/Express API (Port 8001)
* **Database** – MongoDB (Port 27017)

All services are orchestrated using Docker Compose.

---

### Docker Setup

#### 1. Backend Dockerfile

* Uses Node.js base image
* Installs dependencies
* Exposes application port
* Starts the server with `npm start`

#### 2. Frontend Dockerfile

* Multi-stage build:

  * Build React app using Node.js
  * Serve static files using Nginx
* Optimized for production deployment

#### 3. MongoDB

* Uses official MongoDB image
* Persistent storage configured using Docker volumes

---

### Docker Compose

A `docker-compose.yml` file was created to manage all services.

Key configurations:

* Service definitions for frontend, backend, and MongoDB
* Port mappings for external access
* Environment variables for backend (e.g., MongoDB connection string)
* Volume setup for database persistence
* Service dependency management

---

### Running the Application

To build and run the application:

```bash
docker-compose up -d --build
```

To stop the application:

```bash
docker-compose down
```

To check running containers:

```bash
docker-compose ps
```

---

### Networking

* Services communicate internally using Docker network
* Backend connects to MongoDB using:

mongodb://mongo:27017/todo

* Frontend communicates with backend via exposed API endpoint

---

### Outcome

* Successfully containerized the full MERN stack application
* Achieved consistent environment setup across systems
* Verified application functionality using Docker Compose

