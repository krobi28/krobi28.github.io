const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5585000&APPID=cc0e4f8f47c6c30a1277a18b3954ce86&units=imperial';



fetch(apiURLforecast)
  .then((response) => response.json())
  .then((jsObject) => {
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";


    const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

    for (let i = 0; i < fivedayforecast.length; i++) {
      document.getElementById(`high${i+1}`).textContent = fivedayforecast[i].main.temp.toFixed(0) + "\xB0";
      document.getElementById(`day${i+1}`).textContent = weekday[(date.getDay() + i + 1) % 7];
      document.getElementById(`imagesrc${i+1}`).setAttribute('src', "https://openweathermap.org/img/wn/" + fivedayforecast[i].weather[0].icon + "@2x.png");
      document.getElementById(`imagesrc${i+1}`).setAttribute('alt', fivedayforecast[i].weather[0].description);

    }

  });