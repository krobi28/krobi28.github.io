const requestFile = 'js/guides.js';


fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        console.table(prophets);  // temporary checking for valid response and data parsing
   

    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

        card.appendChild(h2);

        let birth = document.createElement('p');
        birth.textContent = "Birth Date: "+ prophets[i].birthdate;
        card.appendChild(birth);

        let place = document.createElement('p');
        place.textContent = "Birth Place: "+ prophets[i].birthplace;
        card.appendChild(place);

        let aux = i + 1;
        let image = document.createElement('img');
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + " - " + aux );
        
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
        
    }

});
