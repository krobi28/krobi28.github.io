const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=cc0e4f8f47c6c30a1277a18b3954ce86&units=imperial';


fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
    
        
    document.getElementById('conditions').textContent = weatherInfo.weather[0].main; //Current Conditions
    document.getElementById('temperature').textContent = weatherInfo.main.temp + " ˚F";  //current temperature
    document.getElementById('humidity').textContent = weatherInfo.main.humidity + " %"; //humidity
    document.getElementById('wspeed').textContent = weatherInfo.main.windSpeed + " mph"; //wind speed

    
    const currentTemp = document.querySelector ('#temperature');
    const highTemp = document.querySelector ('#high');
    const weatherIcon = document.querySelector ('#imagesrc');
    const humidity = document.querySelector ('#humidity');
    const windSpeed = document.querySelector ('#wspeed');

  /*let windchill = 35.74 + (0.6215 * weatherInfo.main.temp) - (35.75 * Math.pow(weatherInfo.wind.speed, 0.16));
  

    if (weatherInfo.main.temp<=50 && weatherInfo.main.speed >3) {
        document.getElementById('windchill').textContent =  Math.round(windchill) + "\xB0F";
    }
    else {
        document.getElementById('windchill').textContent = " N/A";
    }*/
    
    


       currentTemp.textContent = weatherInfo.main.temp;
        highTemp.textContent = weatherInfo.main.highTemp;
        weatherIcon.textContent = weatherInfo.main.icon;
        humidity.textContent = weatherInfo.main.humidity;
        windSpeed.textContent = weatherInfo.main.windSpeed;

   

    });
