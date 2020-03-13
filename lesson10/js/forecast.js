const apiURLforecast = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=cc0e4f8f47c6c30a1277a18b3954ce86&units=imperial';



fetch(apiURLforecast)
  .then((response) => response.json())
  .then((jsObject) => {
    
    

 const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

    for (let i=0; i<fivedayforecast.length; i++) {
    document.getElementById(`day${i+1}`).textContent = fivedayforecast[i].main.temp.toFixed(0) + "\xB0";
    
      }
      /*fivedayforecast.textContent = jsObject.main.fivedayforecast;
      weatherIcon.textContent = jsObject.main.icon;
      highTemp.textContent = jsObject.main.highTemp;*/

   /* document.getElementById('imagesrc').textContent = imagesrc;  
    document.getElementById('icon').setAttribute('src', imagesrc);  
    document.getElementById('icon').setAttribute('alt', desc);*/

   


  
  


});

