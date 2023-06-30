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

const products = [
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
];

const grid = new gridjs.Grid({
    columns: [
        {
            name: "ID",
            width: "80px"
        },
        {
            name: "Name",
            sort: true
        },
        {
            name: "Price",
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
        }
    ],
    //["ID", "Name", /*"Description", "IMG",*/ "Price", "Category"],
    data: products
}).render(document.getElementById("grid-container"));