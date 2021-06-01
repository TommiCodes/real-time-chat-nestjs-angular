# real-time-chat-nestjs-angular


## How to run the Project
Command:  
`docker-compose up`

### Tipps & Tricks
If you follow the videos you something have to delete the images & containers and then start everything again.

Command to remove all images:  
`docker rmi -f $(docker images -a -q)`

Command to remove all containers:  
`docker rm -vf $(docker ps -a -q)`

### Docker commands

Command to start:  
`docker-compose up`

Command to build:
`docker-compose build`


Command to remove all images:  
`docker rmi -f $(docker images -a -q)`

Command to remove all containers:  
`docker rm -vf $(docker ps -a -q)`