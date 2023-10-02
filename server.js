// Database / Project-Endpoint

let dB = {};

// Creating a back end application using express

const express = require('express');
const backendApp = express();

// Allocating project files for the express appilcation

backendApp.use(express.static('website'));

// Requiring parsing & resource-sharing packages in the application

const cors = require('cors');
const bodyParser = require('body-parser');

// Utilizing packages in the application

backendApp.use(cors());
backendApp.use(bodyParser.urlencoded({extended: false}));
backendApp.use(bodyParser.json());

// Assigining a localhost port number

const port = 8000;

// Server, port setup

backendApp.listen(port, ()=>{console.log(`Server running on port number ${port}`)});

// Post route setup

backendApp.post('/postData', updateDatabase);

// Post function to update the database

function updateDatabase (request, response) {
    // console.log(request);
    const incomingData = {
        date: request.body.date,
        temp: request.body.temp,
        feelings: request.body.feeling
    }
    dB.weatherData = incomingData;
    console.log('Database post successful.');
    console.log(dB);
    response.send(dB.weatherData);
};

// Get route setup

backendApp.get('/getData', sendDataToFrontEnd);

// Function to send database content to the front end

function sendDataToFrontEnd (request, response) {
    response.send(dB.weatherData);
    dB = {};
};