window.onload = () => {

    if (localStorage.length == 0) {
        let panierInfo = document.querySelector("#panierInfo");
        panierInfo.innerHTML = `<p>Pas d objet</p>`
    } else {
        let donéeArticle = JSON.parse(localStorage.getItem("article"));

        console.log(donéeArticle)

        let panierInfo = document.querySelector("#panierInfo");




        let tabPanier = []
        let panierPrixTotal = [];

        for (let i = 0; i < donéeArticle.length; i++) {
            console.log(donéeArticle[i]);
            let articleChoise = document.createElement("div");
            articleChoise.classList.add("articleChoise");
            panierInfo.appendChild(articleChoise);

            let articleTitle = document.createElement("div");
            let articlePrix = document.createElement("div");

            articleTitle.classList.add("articleTitle");
            articlePrix.classList.add("articlePrix");

            articleChoise.appendChild(articleTitle);
            articleChoise.appendChild(articlePrix);

            articleTitle.innerHTML = `<img src="${donéeArticle[i].image}" alt="Photo de l'ours ${donéeArticle[i].nom}"/>   <p class="nom">${donéeArticle[i].nom}</p>`;
            articlePrix.innerHTML = `<p class="prix">${donéeArticle[i].prix}</p>`

            console.log(donéeArticle[i].prix);

            let nombreConverti = parseInt(donéeArticle[i].prix)
            panierPrixTotal.push(nombreConverti);







        }

        console.log(panierPrixTotal);

        let prixFinal = 0;
        for (let i = 0; i < panierPrixTotal.length; i++) {
            prixFinal += panierPrixTotal[i];
            console.log(prixFinal)
            localStorage.setItem("prixTotal", prixFinal);
        }


        let prixTotal = document.createElement("div")
        prixTotal.classList.add("prixTotal")
        panierInfo.appendChild(prixTotal)


        document.querySelector(".prixTotal").innerHTML = `<p>${localStorage.getItem("prixTotal")}</p>`



        let form = document.querySelector("#formulaire");



        console.log(form.firstName);

        //Formulaire pour le nom

        form.firstName.addEventListener('change', function() {
            validFirstName(this);


        })

        const validFirstName = function(inputfirstName) {
            let firstNameRegExp = new RegExp('^[a-zA-Z-]+$', 'g');

            let testFirstNameRegExp = firstNameRegExp.test(inputfirstName.value);
            console.log(testFirstNameRegExp);
            let smallFirsName = inputfirstName.nextElementSibling;

            if (testFirstNameRegExp == true) {

                return true

            } else {
                smallFirsName.innerHTML = "Nom invalide";
                return false;
            }

        };


        //Formulaire pour le Prenom



        form.lastName.addEventListener('change', function() {
            validLastName(this);
        })

        const validLastName = function(inputlastName) {
            let lastNameRegExp = new RegExp('^[a-zA-Z-]+$', 'g');

            let testLastNameRegExp = lastNameRegExp.test(inputlastName.value);
            console.log(testLastNameRegExp);
            let smallLastName = inputlastName.nextElementSibling;

            if (testLastNameRegExp == true) {
                return true;

            } else {
                smallLastName.innerHTML = "prenom invalide";
                return false;
            }

        };


        //Formulaire pour l'adresse

        form.adress.addEventListener('change', function() {
            validAdress(this);
        })

        const validAdress = function(inputadress) {
            let adresseRegExp = new RegExp('^[a-zA-Z-0-9- -]+$', 'g');

            let testAdressRegExp = adresseRegExp.test(inputadress.value);
            console.log(testAdressRegExp);
            let smallAdress = inputadress.nextElementSibling;

            if (testAdressRegExp == true) {
                return true;
            } else {
                smallAdress.innerHTML = "Adresse invalide";
                return false;
            }

        }

        //Formulaire pour Ville

        form.city.addEventListener('change', function() {
            validCity(this);
        });

        const validCity = function(inputcity) {
            let cityRegExp = new RegExp('^[a-zA-Z-]+$', 'g');

            let testCityRegExp = cityRegExp.test(inputcity.value);
            console.log(testCityRegExp);
            let smallCity = inputcity.nextElementSibling;

            if (testCityRegExp == true) {

                return true;
            } else {
                smallCity.innerHTML = "Ville invalide";
                return false;
            }
        };



        //Formulaire pour Email

        form.email.addEventListener('change', function() {
            validEmail(this);
        });

        const validEmail = function(inputemail) {
            let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

            let testEmailRegExp = emailRegExp.test(inputemail.value);
            console.log(testEmailRegExp);
            let smallEmail = inputemail.nextElementSibling;

            if (testEmailRegExp == true) {

                return true;
            } else {
                smallEmail.innerHTML = "Email invalide";
                return false;
            }
        };




        const inserPost = data => {
            fetch("http://localhost:3000/api/teddies/order", {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json().then(data => {


                    sessionStorage.setItem('nom', firstName.value)
                    sessionStorage.setItem('prenom', lastName.value)
                    sessionStorage.setItem("orderId", data.orderId)
                    location.replace("confirmation.html")

                }))






        }

        /*Bloquer formulaire si formulaire pas bien remplis  */

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validFirstName(form.firstName) && validLastName(form.lastName) && validAdress(form.adress) && validCity(form.city) && validEmail(form.email)) {

                inserPost({
                    contact: {
                        firstName: firstName.value,
                        lastName: lastName.value,
                        address: adress.value,
                        city: city.value,
                        email: email.value,
                    },
                    products: tabPanier,



                })








            } else {
                alert("Le Formulaire n'est pas valide ")

            }


        })

    }





}