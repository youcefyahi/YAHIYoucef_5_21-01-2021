window.onload = () => {


    // CHARGE LES DOONER STOCKER  DANS LOCAL STORAGE

    let id = localStorage.getItem("id");


    let url= "http://localhost:3000/api/teddies/"+id;{
        fetch(url).then(response => response.json().then(data =>{
            console.log(data);
            let nom = data.name;
            let prix = data.price;
            let image = data.imageUrl;
            let description = data.description;
            let couleur = data.colors;
            console.log(nom)
            console.log(prix)
            console.log(image)
            console.log(description)
            console.log(couleur)
          
            // SELECTION  DES BALISE ET LES DECLARE //
        
            document.querySelector("#nameProduit").innerHTML = nom;
        
            const mainProduit = document.querySelector("#mainProduit");
            const section = document.querySelector("section");
        
            mainProduit.appendChild(section);
        
        
            const produitPres = document.querySelector("#produitPres");
            const prodtuiAction = document.querySelector("#prodtuiAction");
        
        
            section.appendChild(produitPres);
            section.appendChild(prodtuiAction);
        
        
        
            // AJOUT DES ELEMENTS IMAGE, DESCRIPTION ET PRIX DANS LEUR BALISE   //
        
            produitPres.innerHTML = `<img src="${image}" alt="image d'un ours en peluche" id="imageProduit"/>  <select id="colorSelect"></select> `;
            prodtuiAction.innerHTML = `<p id="produitDescription">${description}</p> <p id="produitPrix">${prix}€</p>  <a id="lienPanier" >Ajoutez au panier</a>`;
        
        
            let imageProduit = document.querySelector("#imageProduit");
            let colorSelect = document.querySelector("#colorSelect");
        
        
            produitPres.appendChild(imageProduit);
            produitPres.appendChild(colorSelect);
        
        
        
            //CREATION DES BALISE <OPTION> QUI VONT CONTENIR LES COULEUR VIA UNE BOUCLE  //
        
            for (let i = 0; i < couleur.length; i++) {
        
                let colorChoise = document.createElement("option");
                colorChoise.classList.add("colorChoise");
                colorSelect.appendChild(colorChoise);
                document.querySelectorAll(".colorChoise")[i].innerText = couleur[i];
        
        
            }
        
        
            let ajoutPanier = document.querySelector("#lienPanier");
        
        
            // CREATION D'UN NOUVELLE ARTICLE QUI SERA STOCKER DNAS LOCALSTORAGE   //
        
            class Article {
                constructor(newImage, newNom, newPrix, newId) {
                    this.image = newImage;
                    this.nom = newNom;
                    this.prix = newPrix;
                    this.id = newId;
                }
            }
        
        
        
        
            ajoutPanier.addEventListener('click', function(event) {
        
                localStorageData = localStorage.getItem("article");
        
                article = JSON.parse(localStorageData);
        
                let articleData = article ?? [];
        
                // CREATION D'UN NOUVELLE OBJET QUI SERA RE ENVOYER DANS LOCALSTORAGE  //
                let myArticle = new Article(
                    image,
                    nom,
                    prix,
                    id
                )
        
                // POUSSE DANS UN ARRAY //
        
                articleData.push(myArticle);
        
        
                // DONNER COVERTI EN JSON ENVOYER DANS LE LOCALSTORAGE //
        
        
                let myArticleSerialized = JSON.stringify(articleData);
        
                console.log(myArticleSerialized);
        
                localStorage.setItem("article", myArticleSerialized);
        
        
            });
            
        }))
        }

    //SEPRARE LES ELEMENT DU TALBEAU QUI CONTIEN LES DONNE DES COULEUR 



}