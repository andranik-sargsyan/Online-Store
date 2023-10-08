let linkUser = document.getElementById("link-user");
let linkLogout = document.getElementById("link-logout");

//#region Menu

if (session.user.role == "admin") {
    let menu = document.querySelector("#navbarSupportedContent > ul");

    let menuItem = document.createElement("li");
    menuItem.className = "nav-item";

    let activeClass = location.pathname.includes("admin.html") ? "active" : "";
    menuItem.innerHTML = `<a class="nav-link ${activeClass}" href="admin.html">Admin</a>`;

    menu.appendChild(menuItem);
}

linkUser.innerText = session.user.name;

linkLogout.addEventListener("click", () => {
    delete localStorage["session"];

    location.href = "login.html";
});

//#endregion

//#region Products

const categories = {
    electronics: 0,
    books: 1,
    food: 2,
    household: 3,
    clothes: 4
};
const categoriesArray = Object.keys(categories).map(c => Object({
    id: categories[c],
    name: c
}));

if (!localStorage["products"]) {
    //localStorage["products"] = JSON.stringify([]);
    localStorage["products"] = JSON.stringify([
        {
            id: 1,
            name: "Cheese Cheddar (kg)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img: "https://store.pagelsponderosa.com/wp-content/uploads/2020/08/Mild-Cheddar-Block-resized.jpg",
            price: 5,
            category: categories.food
        },
        {
            id: 2,
            name: "PlayStation 4",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/ps4/2/26/Ps4pro.jpg",
            price: 410,
            category: categories.electronics
        },
        {
            id: 3,
            name: "White Bread",
            description: "",
            img: "https://www.thespruceeats.com/thmb/vbc6MqkqHlkSOx_X5Clyo5qv0kk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/loaf-of-bread-182835505-58a7008c5f9b58a3c91c9a14.jpg",
            price: 0.89,
            category: categories.food
        },
        {
            id: 4,
            name: "JS Scope & Closures",
            description: "A very nice book to understand JS in depth.",
            img: "https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1534608307598-UPP2X3OSLOUQ5ZHPXD7E/images.png",
            price: 19.99,
            category: categories.books
        },
        {
            id: 5,
            name: "Nike Boots",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "",
            price: 79.99,
            category: categories.clothes
        }
    ]);
}

const products = JSON.parse(localStorage["products"]);

//#endregion