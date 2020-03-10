const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473.imperial&APPID={cc0e4f8f47c6c30a1277a18b3954ce86}";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  });
