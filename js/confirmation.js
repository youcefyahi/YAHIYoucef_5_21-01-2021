window.onload = () => {

    let nom = sessionStorage.getItem('nom');
    let prenom = sessionStorage.getItem("prenom");
    let numeroCommande = sessionStorage.getItem("orderId");
    let prixTotal = localStorage.getItem("prixTotal")

    console.log(nom)
    console.log(prenom)
    console.log(numeroCommande)


    document.querySelector("#mainConfirmationContent").innerHTML = `<p>Biensvenue <span>${nom}</span> <span>${prenom}</span>, nous vous remession pour votre commande n°<span>${numeroCommande}</span>, d'un montant de <span>${prixTotal}€</span>. </p>`

}