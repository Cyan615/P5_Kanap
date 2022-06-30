// récupération de l'URL produit sélectionné sur la page d'acceuil
const selectedSofaId = window.location.search;
const urlSearchParams = new URLSearchParams(selectedSofaId);
const id = urlSearchParams.get("id");


// affichage du canapé séléctionné par son id
fetch(`http://localhost:3000/api/products/${id}`)
    .then((res) => res.json())
    .then((promise) => choiceData(promise));


// création des éléments de la carte produit sélectionné en page d'acceuil

function choiceData(sofa) {
    const {imageUrl, altTxt, description, colors, price, name} = sofa
    makeImage(imageUrl, altTxt)
    makeName(name)
    makePrice(price)
    makeDescription(description)
    colorsChoice(colors)
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
// ajout du prix dans la carte produit
function makePrice(price) {
    const prix = document.querySelector("#price")
    if (prix != null) prix.textContent = price
}
// ajout de la description du canapé dans la carte produit
function makeDescription(description) {
    const sofaDescription = document.querySelector("#description")
    if (sofaDescription != null) sofaDescription.textContent = description
}
// ajouter les parametres de couleur disponible pour le produit séléctionné
function colorsChoice(colors) {
    const selectColor = document.querySelector("#colors")
    if (selectColor != null) {
        colors.forEach( (color) => {
            const option = document.createElement('option')
            option.value = color
            option.textContent = color
            selectColor.appendChild(option)
        })
    }
}