const requestURL = 'https://github.com/krobi28/krobi28.github.io/blob/master/guide.json';


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
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + " - " + aux );
        
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
        
    }

});
