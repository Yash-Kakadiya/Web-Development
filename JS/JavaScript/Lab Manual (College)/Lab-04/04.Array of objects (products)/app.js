//Array of objects (products)

const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 29.99,
        stock: 150,
        brand: "Logitech",
        rating: 4.5,
        releaseDate: "2023-02-15"
    },
    {
        id: 2,
        name: "Gaming Keyboard",
        category: "Electronics",
        price: 79.99,
        stock: 85,
        brand: "Razer",
        rating: 4.8,
        releaseDate: "2023-05-10"
    },
    {
        id: 3,
        name: "Smartphone",
        category: "Mobile",
        price: 699.99,
        stock: 50,
        brand: "Apple",
        rating: 4.7,
        releaseDate: "2023-03-01"
    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        category: "Audio",
        price: 49.99,
        stock: 120,
        brand: "JBL",
        rating: 4.3,
        releaseDate: "2023-01-20"
    },
    {
        id: 5,
        name: "Fitness Tracker",
        category: "Wearable",
        price: 39.99,
        stock: 200,
        brand: "Fitbit",
        rating: 4.6,
        releaseDate: "2023-04-05"
    }
];

document.write("<table border>");
document.write("<tr><th>ID</th>");
document.write("<th>Name</th>");
document.write("<th>Category</th>");
document.write("<th>Price ($)</th>");
document.write("<th>Stock</th>");
document.write("<th>Brand</th>");
document.write("<th>Rating</th>");
document.write("<th>Release Date</th></tr>");

for (let i = 0; i < products.length; i++) {
    document.write("<tr>");
    document.write("<td>" + products[i].id + "</td>");
    document.write("<td>" + products[i].name + "</td>");
    document.write("<td>" + products[i].category + "</td>");
    document.write("<td>" + products[i].price + "</td>");
    document.write("<td>" + products[i].stock + "</td>");
    document.write("<td>" + products[i].brand + "</td>");
    document.write("<td>" + products[i].rating + "</td>");
    document.write("<td>" + products[i].releaseDate + "</td>");
    document.write("</tr>");
}

console.log(products);