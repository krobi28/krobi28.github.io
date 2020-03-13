const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=cc0e4f8f47c6c30a1277a18b3954ce86';


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
      

      const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
      const weatherIcon = document.querySelector ('#imagesrc');
      const highTemp = document.querySelector ('#high');
      const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
      const desc = jsObject.weather[0].description; 


    for (let i=0; i<fivedayforecast.length; i++) {
        document.getElementById('forcast${i+1}').textContent = fivedayforecast[i].main.temp;
    }

    document.getElementById('imagesrc').textContent = imagesrc;  
    document.getElementById('icon').setAttribute('src', imagesrc);  
    document.getElementById('icon').setAttribute('alt', desc);

    fivedayforecast.textContent = jsObject.main.fivedayforecast;
    weatherIcon.textContent = jsObject.main.icon;
    highTemp.textContent = jsObject.main.highTemp;


  
  


});

