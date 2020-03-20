const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Preston') {

                let townEvents = document.createElement('div');

        for (let l = 0; l <= 4; l++) {
                let events = document.createElement('p');
                events.textContent = towns[i].events[l];
                townEvents.appendChild(events);
             }
       
            document.querySelector('#upcoming').appendChild(townEvents);

            }
        }
    });