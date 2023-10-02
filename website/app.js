// Defining Global Variables

let d = new Date();
let newDate = d.getMonth()+1+'/'+ d.getDate()+'/'+ d.getFullYear();
let uiDate = document.querySelector('#date');
let uiTemp = document.querySelector('#temp');
let uiContent = document.querySelector('#content');
const getUserInput = document.querySelector('#generate');

// Calling the main front end function when user clicks generate

getUserInput.addEventListener('click', mainFunction);

// The main front end function that calls the fetch-API, post, get & UI functions

function mainFunction () {
    getDataFromApi ()
    .then((apiWeatherData) => {
        let userFeeling = document.querySelector('#feelings').value;
        postToServer('/postData', {date: newDate, temp: apiWeatherData.main.temp, feeling: userFeeling});
        getFromServer('/getData')
        .then((dataFromServer) => {
            updateUi(dataFromServer);
        });
    });
};

// Function to request weather data from the API

let getDataFromApi = async () => {
    const apiKey = '1121dafdca6353b28cf83b5a172c1f37';
    let zipCode = document.querySelector('#zip').value;
    let mainUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`;
    let response = await fetch (mainUrl);
    try {
        let apiWeatherData = await response.json();
        console.log('Weather api data successfully acquired.');
        console.log(apiWeatherData);
        return apiWeatherData;
    } catch (error) {
        console.log(error, '\nSomething is wrong in the getDataFromApi function.');
    }
};

// Function to post API data to the local server

let postToServer = async (url = '', data = {}) => {
    let response = await fetch (url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try {
        let jsonDataToServer = await response.json();
        console.log('Object "weatherData" successfully posted to database.');
        console.log(jsonDataToServer);
    } catch (error) {
        console.log(error, '\nSomething is wrong in the post request.');
    };
};

// Function to retreive data from the local server

let getFromServer = async (url) => {
    let response = await fetch (url);
    try {
        let dataFromServer = await response.json();
        console.log('Data successfully received from server.');
        console.log(dataFromServer);
        return dataFromServer;
    } catch (error) {
        console.log(error, '\nSomething is wrong in the get request.');
    };
};

// Function to display data to the user

function updateUi (data) {
    uiDate.innerHTML = `Today is ${data.date}.`;
    uiTemp.innerHTML = `It is ${Math.round(data.temp)}˚F outside.`;
    uiContent.innerHTML = `You are ${data.feelings}. Make this day count!`;
};