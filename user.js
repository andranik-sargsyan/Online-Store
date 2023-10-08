let productsGrid = document.getElementById("products-grid");

for (let product of products) {
    let productDiv = document.createElement("div");

    productDiv.className = "product-item";
    productDiv.dataset["id"] = product.id;
    productDiv.innerHTML = `
        <h4>${product.name} <span class="badge bg-success text-sm">${categoriesArray.find(c => c.id == product.category).name}</span></h4>
        <img src="${product.img || 'no-image.jpg'}" alt="Image" class="img-thumbnail" />
        <p class="mt-2">${product.description}</p>
        <h4>$${product.price}</h4>
        <button class="btn bg-info">Add To Cart 🛒</button>
    `;
    productDiv.querySelector("button").addEventListener("click", () => {
        alert(`You have successfully bought "${product.name}" at $${product.price}.`);
    });

    productsGrid.appendChild(productDiv);
}