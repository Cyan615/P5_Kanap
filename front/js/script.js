fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => addProducts(data))   

    // création card canapé page acceuil
function addProducts(refCanap) {
    
    const imageUrl = refCanap[0].imageUrl

    const anchor = document.createElement("a")
    anchor.href = "http://localhost:3000/images/kanap01.jpeg"
    anchor.text = "canap card"
    const items = document.querySelector("#items")
    if (items != null) {
        items.appendChild(anchor)
    }

}