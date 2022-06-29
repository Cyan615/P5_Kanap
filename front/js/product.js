// récupération de l'URL produit sélectionné sur la page d'acceuil
const selectedSofaId = window.location.search;
const urlSearchParams = new URLSearchParams(selectedSofaId);
const id = urlSearchParams.get("id");


// affichage du canapé séléctionné par son id
const fetchProduit = async () => {
    await fetch(`http://localhost:3000/api/products/${id}`)
        .then((res) => res.json())
        .then((promise) => choiceData(promise));
};
fetchProduit()

// création des éléments de la carte produit sélectionné en page d'acceuil

function choiceData(sofa) {
    const {imageUrl, altTxt, description, color, price, _id, name} = sofa
    makeImage(imageUrl, altTxt)
    makeName(name)
    makePrice(price)
}
// création de l'élement image
function makeImage(imageUrl, altTxt){
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    const parent = document.querySelector(".item__img")
    if (parent != null) parent.appendChild(image)
}
// ajout du nom dans la balise <h1> titre
function makeName(name) {
    const title = document.querySelector("#title")
    if (title != null) title.textContent = name    
}
// ajout du prix dans la carte canapé
function makePrice(price) {
    const prix = document.querySelector("#price")
    prix.textContent = price
}
