const requestURL = 'https://github.com/krobi28/krobi28.github.io/blob/master/final-project/guide.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const guide = jsonObject['guide'];




        for (let i = 0; i < guide.length; i++) {
            if (guide[i].name == 'Jeff Thompson' || guide[i].name == 'Keith Wilson' || guide[i].name == 'Ben Turner' || guide[i].name == 'Nick Johnson') {

                let card = document.createElement('section');
                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                let name = document.createElement('p');
                let email = document.createElement('p');
                let certification = document.createElement('p');
                let yearsOfExperience = document.createElement('p');
                let img = document.createElement('img');


                h2.textContent = guide[i].name;
                name.textContent = "Name: " + guide[i].name;
                email.textContent = "e-mail: " + guide[i].email;
                certification.textContent = "Certification Level: " + guide[i].certification;
                yearsOfExperience.textContent = "Years of Experience: " + guide[i].yearsOfExperience;


                img.setAttribute('src', '/images/' + guide[i].img);
                img.setAttribute('alt', "picture of: " + h2.textContent);


                div.appendChild(h2);
                div.appendChild(name);
                div.appendChild(email);
                div.appendChild(certification);
                div.appendChild(yearsOfExperience);

                card.appendChild(div);
                card.appendChild(img);


                document.querySelector('div.cards').appendChild(card);
            }
        }

    });