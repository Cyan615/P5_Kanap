fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return addProducts(data)
    })   

    // création card canapé page acceuil
    
// ajouter un produit 
function addProducts(refCanap) {
    const idCanap = refCanap[0]._id
    const name = refCanap[0].name
    const description = refCanap[0].description
    const imageUrl = refCanap[0].imageUrl
    const altTxt = refCanap[0].altTxt

    const anchor = makeAnchor(idCanap)
    const article = makeArticle()
    const h3 = makeH3(name)
    const p = makeParagraph(description)
    const image = makeImage(imageUrl, altTxt)
    
    article.appendChild(image)
    article.appendChild(h3)
    article.appendChild(p)
    appendChild(anchor, article)
}
// lié l'élement au document
function appendChild(anchor, article) {
    const items = document.querySelector("#items")
    if (items != null) {
        items.appendChild(anchor)
        anchor.appendChild(article)
        console.log("élement ajouté à anchor", anchor)
    }   
}

// créer l'élément "a"
function makeAnchor(idCanap) {
    const anchor = document.createElement("a")
    anchor.href = "./product.html?id=" + idCanap
    return anchor
}

// créer l'élement "article"
function makeArticle(){
    const article = document.createElement("article")
    return article
}
// créer l'élement image
function makeImage(imageUrl, altTxt){
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    return image
}
// créer l'élément titre
function makeH3(name){
    const h3 = document.createElement("h3")
    h3 .textContent = name
    return h3
}
// créer l'élément paragraphe
function makeParagraph(descrition){
    const p = document.createElement("p")
    p .textContent = descrition
    return p
}