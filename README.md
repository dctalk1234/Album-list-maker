# Album-list-maker
This is a multi-page browser application that allows a user to keep track of lists of music albums.

## Set Up
To get your own copy of this application you can simply fork and download this repository. Then run mongod, then node db/seed.js, followed by nodemon index.js. This will run the app at localhost:3000.


## Current Version
You can see the most recently updated deployed version at https://albumlistmaker.herokuapp.com/users

## Features
* Users can be created, edited and deleted
* Each user has has an array of list object references which allow lists to be specifically tied to a particular user
* Each list has an array of album object references which allow those albums to be specifically tied to an individual list
* Full CRUD functionality on each of the three models

## Features Still Under Construction
* Connection to lastFM API to pull data for each album instead of the user having to add data manually

## Technologies Used
* node.js
* express.js
* handlbars.js
* mongoose.js
* MongoDB
* Heroku (for deployment)

