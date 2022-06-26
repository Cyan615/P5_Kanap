fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => addProducts(data))   

    // création card canapé page acceuil
    
// ajouter un produit 
function addProducts(refCanap) {
    refCanap.forEach(sofa => {
        const {_id, name, description, imageUrl, altTxt} = sofa
        const anchor = makeAnchor(_id)
        const article = document.createElement("article")
        const h3 = makeH3(name)
        const p = makeParagraph(description)
        const image = makeImage(imageUrl, altTxt)
    
        appendElementsToArticle(article, [image, h3, p])
        appenArticleToAnchor(anchor, article)
    });
}
// lié les élements au document
function appendElementsToArticle(article, array) {
    array.forEach(item => {
        article.appendChild(item)
        
    })
}

function appenArticleToAnchor(anchor, article) {
    const items = document.querySelector("#items")
    if (items != null) {
        items.appendChild(anchor)
        anchor.appendChild(article)
    }   
}

// créer l'élément "a"
function makeAnchor(idCanap) {
    const anchor = document.createElement("a")
    anchor.href = "./product.html?id=" + idCanap
    return anchor
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
    h3.classList.add("productName")
    return h3
}
// créer l'élément paragraphe
function makeParagraph(descrition){
    const p = document.createElement("p")
    p .textContent = descrition
    p .classList.add("productDescription")
    return p
}