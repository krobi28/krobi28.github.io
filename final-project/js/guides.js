const requestURL = 'https://github.com/krobi28/krobi28.github.io/blob/master/final-project/guides.json';


fetch(requestURL)


    .then((data) => data.json())
    .then((guides) => {



        for (let i = 0; i < guides.length; i++) {
            let guides = guides[i];


            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let name = document.createElement('p');
            let email = document.createElement('p');
            let certification = document.createElement('p');
            let yearsOfExperience = document.createElement('p');
            let img = document.createElement('img');


            h2.textContent = guides[i].name;
            name.textContent = "Name: " + guides[i].name;
            email.textContent = "e-mail: " + guides[i].email;
            certification.textContent = "Certification Level: " + guide[i].certification;
            yearsOfExperience.textContent = "Years of Experience: " + guide[i].yearsOfExperience;


            img.setAttribute('src', '/images/' + guides[i].img);
            img.setAttribute('alt', "Picture of: " + h2.textContent);


            div.appendChild(h2);
            guides.appendChild(div);
            guides.appendChild(img);
            div.appendChild(name);
            div.appendChild(email);
            div.appendChild(certification);
            div.appendChild(yearsOfExperience);

            document.querySelector('div.guides').appendChild(guides);
        }


    });