# Rocket.Chat Buddy Status

A quick proof-of-concept project to provide online status of Rocket.Chat buddies. More traditional chat programs like [Pidgin](https://pidgin.im/) or [Steam Chat](https://steamcommunity.com/chat/) provide a "buddy" list so you can see who is online. In Rocket.Chat, you can certainly add people to favorites but if you are also subscribed to any number of channels it can get pretty noisy.

## Getting Started

If you don't have access to a Rocket.Chat server one can be provided very quickly using the [Docker image](https://hub.docker.com/_/rocket-chat). First retrieve the image.
```
$ docker pull rocket.chat
```
Then start the database.
```
$ docker run --name db -d mongo:3.0 --smallfiles
```
Finally, start a Rocket.Chat instance. The invocation below uses port 80 on your local PC.
```
$ docker run --name rocketchat -p 80:3000 --env ROOT_URL=http://localhost --link db -d rocket.chat
```

The project has been set up as a [GitHub Project Page](https://help.github.com/en/articles/user-organization-and-project-pages) so it is easy to see how it works; see https://gkhays.github.io/rc-buddy-status/.

Click on the "hamburger" menu to add a Rocket.Chat server and buddies.

## Built With

* [jQuery](https://jquery.com/)
* [Bootstrap](https://getbootstrap.com/)
