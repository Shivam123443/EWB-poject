
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

console.log("All Products (forEach)");

products.forEach(product => {
    console.log(`Item: ${product.name} - Price: $${product.price}`);
});

console.log("\nFiltered Products (Price < $50)");

const filteredProducts = products.filter(product => {
    return product.price < 50;
});

console.log(filteredProducts);

console.log("\nMapped Product Tags (map)");

const mappedProducts = products.map(product => {
    return `${product.name.toUpperCase()} costs $${product.price}`;
});

console.log(mappedProducts);
