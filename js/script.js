// APPEL DE L'API //
let url = "http://localhost:3000/api/teddies";
fetch(url).then(response => response.json().then(data => {
    // AFFICHE LES DONNER RECUPERER //
    console.log(data);

    // EXPLOITER LES DONNER RECU VIA UNE BOUCLE //

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);


        // SELECTIONNE LA BALISE <SECTION>? AJOUT D UN ID,CREATION DE LA BALISE <FIGURE> ENFANT DE <SECTION>//

        const newFigure = document.createElement("figure");
        const main = document.querySelector("#mainContent");

        main.appendChild(newFigure);

        newFigure.innerHTML = `<img src=""  class="imgOurs">`;


        // CREATION DE LA BALISE <FIGCAPTION> ENFANT DE FIGURE//
        const newFigcaption = document.createElement("figcaption");
        newFigure.appendChild(newFigcaption);

        // AJOUT DES BALISE <P> AJOUR DE CLASS EN ATTENTE DE RECEVOIR LES DONNER //
        newFigcaption.innerHTML = `<p class="nom"></p>` + `<p class="prix"></p>`;

        let lien = document.createElement("a");

        newFigcaption.appendChild(lien);

        lien.innerText = "Voir l'article";
        lien.setAttribute("href", "produit.html");
        lien.classList.add("lienProduit");

        let machin = document.querySelectorAll(".prix");
        console.log(machin);

        // AJOUT DES ELEMENTS NOM, PRIX , IMAGE PRISE VIA L API APPLER 

        document.querySelectorAll(".prix")[i].innerText = data[i].price;
        document.querySelectorAll(".nom")[i].innerText = data[i].name;
        document.querySelectorAll(".imgOurs")[i].setAttribute('src', data[i].imageUrl);



        let newLien = document.getElementsByClassName("lienProduit");
        console.log(newLien);

        // AJOUT DE L EVENEMENT QUI STOCK DANS LOCAL STORAGE AU CLICK LES DONNER VOULU // 

        newLien[i].addEventListener('click', function(event) {


            localStorage.setItem("nom", data[i].name);
            localStorage.setItem("prix", data[i].price);
            localStorage.setItem("image", data[i].imageUrl);
            localStorage.setItem("description", data[i].description);
            localStorage.setItem("couleur", data[i].colors);
            localStorage.setItem("id", data[i]._id);
        });
    };


}));