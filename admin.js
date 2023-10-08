let currentId = products[products.length - 1].id + 1;

const grid = new gridjs.Grid({
    columns: [
        {
            name: "ID",
            sort: true,
            width: "100px"
        },
        {
            name: "Name",
            sort: true,
            width: "200px"
        },
        {
            name: "Description",
            attributes: {
                'style': 'text-overflow: ellipsis; overflow: hidden; white-space: nowrap;'
            },
            width: "500px",
            formatter: description => gridjs.html(`<span title="${description}">${description}</span>`)
        },
        {
            name: "Price",
            width: "140px",
            sort: true,
            formatter: price => `$${price}`
        },
        {
            name: "Category",
            sort: {
                compare: (cid1, cid2) => {
                    let c1 = categoriesArray.find(c => c.id == cid1);
                    let c2 = categoriesArray.find(c => c.id == cid2);

                    if (c1.name > c2.name) {
                        return 1;
                    } else if (c2.name > c1.name) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            },
            attributes: {
                'style': 'text-transform: capitalize;'
            },
            formatter: cid => categoriesArray.find(c => c.id == cid).name
        },
        {
            id: "img",
            name: "Image",
            width: "200px",
            formatter: img => img && gridjs.html(`<a href="${img}" target="_blank"><img src="${img}" class="img-thumbnail" alt="Image" /></a>`)
        }
    ],
    data: products
}).render(document.getElementById("grid-container"));

let btnAdd = document.getElementById("btn-add");
let txtName = document.getElementById("txt-name");
let txtDescription = document.getElementById("txt-description");
let txtPrice = document.getElementById("txt-price");
let ddlCategory = document.getElementById("ddl-category");
let txtImg = document.getElementById("txt-img");

btnAdd.addEventListener("click", () => {
    let name = txtName.value.trim();
    if (!name) {
        alert("Name is required.");
        return;
    }

    let price = txtPrice.value;
    if (!price) {
        alert("Price is required.");
        return;
    }

    let imgURL = txtImg.value.trim();
    if (imgURL) {
        let urlPattern = /^(http(s?):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)$/;
        if (!urlPattern.test(imgURL)) {
            alert("Image URL is not valid.");
            return;
        }
    }

    let product = {
        id: currentId++,
        name: name,
        description: txtDescription.value.trim(),
        img: imgURL,
        price: price,
        category: +ddlCategory.value
    };

    products.push(product);
    localStorage["products"] = JSON.stringify(products);

    grid.forceRender();

    txtName.value = "";
    txtDescription.value = "";
    txtImg.value = "";
    txtPrice.value = "";
    ddlCategory.value = "0";

    var modalAddProduct = document.getElementById('addProduct');
    var modal = bootstrap.Modal.getInstance(modalAddProduct);
    modal.hide();
});
