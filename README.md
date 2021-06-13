# real-time-chat-nestjs-angular

Link to Github: https://github.com/ThomasOliver545/real-time-chat-nestjs-angular  
Link to all Commits on Github: https://github.com/ThomasOliver545/real-time-chat-nestjs-angular/commits  
Link to Youtube Playlist: https://www.youtube.com/playlist?list=PLVfq1luIZbSkICzoA8EuvTskPEROS68i9  
Link to Twitter: https://twitter.com/Thomas_OliverK  

## Good to know
- Api build with NestJS 8, because v8 has Support for the latest Socket.io Release v4
- Angular used in v12 & also Angular Material
- Start Command `docker-compose up`
- The first Video is an Overview for the first Part of the series [Videos 1-17], there will also be more features & bugfixes added in the future
(then with like another overview video)
- All Commits are prefixed with the Video Number, where they were made, e.g. `Video-17: ...`
- In the folder _user_stories you can have a look at all the implemented user stories so far, in 00_overview you have a list of all videos
- Sometimes when you follow the videos you might need to dump the images/containers and rebuild, look below to the tipps & tricks
- in the todo.md file are some ideas that could be implemented in the future

## Overview of the Series
This Series is about implementing a Realtime Chat with Websockets (here we used Socket.io v4).
The Main features are:
- Register a new User
- Login with a user and get a valid jwt Token for Auth (API & Websocket)
- Create a Chatroom and add other users by their username
- Join one of your chatrooms and see the latest messages
- Add a message to the chatroom, this will be emmitted immediately to all other joined Users for this Room that are currently online

The NestJS API is build with NestJS 8, because v8 has support for the latest socket.io Release v4.

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