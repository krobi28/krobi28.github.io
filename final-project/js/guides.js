const requestURL = 'https://github.com/krobi28/krobi28.github.io/blob/e73aa802630be84c451fa63e0ca6f280cf452387/final-project/guide.json';


fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        const guide = jsonObject['guide'];
   

    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');

        h2.textContent = guide[i].name;

        card.appendChild(h2);

        image.setAttribute('src', '/images/' + guide[i].photo);
        image.setAttribute('alt', "picture of: " + h2.textContent);  

        let name = document.createElement('p');
        name.textContent = "Name: "+ guide[i].name;
        card.appendChild(name);

        let email = document.createElement('p');
        email.textContent = "E-Mail: "+ guide[i].email;
        card.appendChild(email);

        let certification = document.createElement('p');
        certification.textContent = "Certificaion Level: "+ guide[i].certification;
        card.appendChild(certification);

        let yearsOfExperience = document.createElement('p');
        yearsOfExperience.textContent = "Years of Experience: "+ guide[i].yearsOfExperience;
        card.appendChild(yearsOfExperience);

        let biographySketch = document.createElement('p');
        biographySketch.textContent = "Biography: "+ guide[i].biographySketch;
        card.appendChild(biographySketch);

        let aux = i + 1;
        let image = document.createElement('img');
        image.setAttribute('src', guide[i].imageurl);
        image.setAttribute('alt', guide[i].name + ' ' +  " - " + aux );
        
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
        
    }

});
