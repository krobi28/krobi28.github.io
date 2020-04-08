/*const requestURL = 'https://github.com/krobi28/krobi28.github.io/blob/master/final-project/guide.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const guide = jsonObject['guide.json'];*/

let requestURL = 'https://github.com/krobi28/krobi28.github.io/blob/master/final-project/guides.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const guides = request.response;
    display(guides);
}

function display(jsonObject) {
    const guides = jsonObect['guides'];
}

        for (let i = 0; i < guides.length; i++) {
            if (guides[i].name == 'Jeff Thompson' || guides[i].name == 'Keith Wilson' || guides[i].name == 'Ben Turner' || guides[i].name == 'Nick Johnson') {

                const card = document.createElement('section');
                const div = document.createElement('div');
                const h2 = document.createElement('h2');
                const name = document.createElement('p');
                const email = document.createElement('p');
                const certification = document.createElement('p');
                const yearsOfExperience = document.createElement('p');
                const img = document.createElement('img');

                /*let card = document.createElement('section');
                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                let name = document.createElement('p');
                let email = document.createElement('p');
                let certification = document.createElement('p');
                let yearsOfExperience = document.createElement('p');
                let img = document.createElement('img');*/
                
               
                h2.textContent = guides[i].name;
                name.textContent = "Name: " + guides[i].name;
                email.textContent = "e-mail: " + guides[i].email;
                certification.textContent = "Certification Level: " + guide[i].certification;
                yearsOfExperience.textContent = "Years of Experience: " + guide[i].yearsOfExperience;


                img.setAttribute('src', '/images/' + guides[i].img);
                img.setAttribute('alt', "picture of: " + h2.textContent);


                div.appendChild(h2);
                div.appendChild(name);
                div.appendChild(email);
                div.appendChild(certification);
                div.appendChild(yearsOfExperience);

                guides.appendChild(div);
                guides.appendChild(img);


                document.querySelector('div.cards').appendChild(card);
            }
        }

   ;


    
