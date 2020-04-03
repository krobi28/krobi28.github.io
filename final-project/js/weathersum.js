const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83549&APPID=cc0e4f8f47c6c30a1277a18b3954ce86&units=imperial';


fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {


        document.getElementById('conditions').textContent = weatherInfo.weather[0].main; //Current Conditions
        document.getElementById('temperature').textContent = weatherInfo.main.temp; //current temperature
        document.getElementById('humidity').textContent = weatherInfo.main.humidity; //humidity
        document.getElementById('wspeed').textContent = weatherInfo.main.windSpeed; //wind speed


        const currentTemp = document.querySelector('#temperature');
        const humidity = document.querySelector('#humidity');
        const windSpeed = document.querySelector('#wspeed');


        currentTemp.textContent = weatherInfo.main.temp.toFixed(0) + " ºF";
        humidity.textContent = weatherInfo.main.humidity + " %";
        windSpeed.textContent = weatherInfo.wind.speed.toFixed(0) + " mph";
       
        let t = parseFloat(document.getElementById('temperature').textContent);
        let s = parseFloat(document.getElementById('wspeed').textContent);
        
        if (t<=50 && s>=3) {
            windchill = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + (0.425 * t * (Math.pow(s, 0.16)));
        
            document.getElementById('windchill').textContent = (windchill).toFixed(0) + " ºF";
        }
        
        else {
        
            document.getElementById('windchill').textContent = ("N/A");
        }
        
    });