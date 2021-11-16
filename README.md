# jobbyfie_restapi

Jobbyfie is basically the job center where they can provides us job as the job seeker wanted and also company will created the job and the job seeker will apply that job. While making, I follow the MVC pattern with the error handling. 
To make this REST API using nodejs, expressjs and mongoDB [BACKEND SERVER]

Job Provider or Company have to create a account and have access to add, update and delete the job. Job seeker doesn't need to create their account. Job seeker will view that job whose are created by Job Provider or Company.

## Installation

Before clone the repo, you must have node.js on your device.
 
    Fork this repo 
    $ git clone https://github.com/<username_github>/jobbyfie_restapi.git

## Remember to install all the dependencies...

    $ npm install
    
## Create the .env file
       PORT = 5000
       MONGO_URL = mongodb-url
       JWT_SECRET = give_secret_jwt
       JWT_EXPIRE= give_time_expire

## Usage

    $ node server.js
    
#

#### Check the endpoint with in the Postman API
### Getting specific company all jobs while login  
       GET /api/v1/jobs
### Getting specific company only one jobs while login by ID 
       GET /api/v1/jobs/:id
### Get all jobs without login
       GET /api/v1/jobsview
### Get all jobs without login with searching the job name
       GET /api/v1/jobsview?jobname=flutter
### while login a company, Update a single job by ID 
       PUT /api/v1/jobs/:id 
### while login a company, Delete a job by ID
       DELETE /api/v1/jobs/:id
### Register if we want to create job       
       POST /api/v1/auth/register
### Login 
       POST /api/v1/auth/login
#

## Remove node_modules from git in vscode
#### Run below commands in your terminal
    git rm -r --cached node_modules
    git commit -am "node_modules be gone!"
    git push origin master

    
## Resources   
[Nodejs Docs](https://nodejs.org/en/docs/)
    
[Expressjs Docs](https://expressjs.com/en/guide/writing-middleware.html)
    
[MongoDB Docs](https://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/)

[MVC-Architecture Docs](https://www.geeksforgeeks.org/model-view-controllermvc-architecture-for-node-applications/)

[CORS](https://www.npmjs.com/package/cors)

[HELMET](https://www.npmjs.com/package/helmet)
