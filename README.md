# Weather-Journal App Project

## Overview

This project's objective is to create an asynchronous application, that fetches weather data from an online weather API, stores it on a local sever, fetches the data from the server to the front end application, then uses it to dynamically update the user interface.

## The routing sequence is as following:

- Request weather data from API
- Send the recieved data to the mock NodeJS back end to store it in the database
- Get the data again from the database to the front end
- Update the website/user-interface with the data received from the server

## My approach (followed steps) to the project:

- Begin by creating golbal variables in the app.js file
- Create a general funcation that includes the callings of all other (described as follows) functions
- Create an asynchronous function to get the API's weather data
- Collect user input and date values, along with the weather data in the post request's argument object
- Create an asynchronous post request function to send the collected data object to the server
- Contruct the server in the server.js file using express, cors & body-parser
- Run the node.js server by listening to it on port number 8000
- Create a post route
- Create a post function in the server.js file to update the server's database with the recieved data
- Create an asynchronous get request function in the app.js file to request data from the database
- Create a get route in the server.js file
- create a get function to send the content of the database to the front end, and then clear the database for further requests
- Create a function in the app.js file to update the user interface with the data recieved from the server

# To run the NodeJS server for internal data routing, open a new terminal and enter the following command:

node server.js

# Notes:

- Make sure you have node on your system, and that express is installed in the projects' directeory before running the server.
- Press Ctrl+C in the terminal window where the server is running to stop the server.
- Visit nodejs.org to install NodeJS.
- To install express, use the terminal command: npm install express

# To stop the server, hit cnrt+c in the teminal on your keyboard.

## Note: Due to the API setting restrictions, you need to use and American zipcode for the API to run properly.

(For example: 94111, which is the zip code for the downtown area of San Francisco, California.)
