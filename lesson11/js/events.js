const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Preston') {

                let townEvents = document.createElement('section');
                let events = document.createElement('events');
                

                events.textContent = towns[i].events;

                townEvents.appendChild(events);
               
                document.querySelector('.townEvents').appendChild(townEvents);

            }}
        }
    });