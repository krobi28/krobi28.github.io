const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=cc0e4f8f47c6c30a1277a18b3954ce86";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      

      cost fivedayforecast = jsObject.list.filter(x => x.dt_tst.includes('18:00:00'));
    

    for (let i=0; i<fivedayforecast.length; i++) {
        document.getElementById('forcast'${i+1} ).textContent = fivedayforecast[i].main.temp;
    }
});

/* 
 /* const currentTemp = document.querySelector ('#temperature');
    const highTemp = document.querySelector ('#high');
    const weatherIcon = document.querySelector ('#imagesrc');
    const humidity = document.querySelector ('#humidity');
    const windSpeed = document.querySelector ('#wspeed');*/

    document.getElementById('current').textContent = jsObject.weather[0].main; //Current Conditions
    document.getElementById('temperature').textContent = jsObject.main.temp + " ˚F";  //current temperature
    document.getElementById('humidity').textContent = jsObject.main.humidity + " %"; //humidity
    document.getElementById('wspeed').textContent = jsObject.main.windSpeed + " mph"; //wind speed


   

    
    currentTemp.textContent = jsObject.main.temp;
    highTemp.textContent = jsObject.main.highTemp;
    weatherIcon.textContent = jsObject.main.icon;
    humidity.textContent = jsObject.main.humidity;
    windSpeed.textContent = jsObject.main.windSpeed;
    
 

  const imagesrc = `https://openweathermap.org/img/w/ ${jsObject.weather[0].icon} .png`;  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

});

