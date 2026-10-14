// Interactive Product Inventory & Analytics Dashboard

console.log("---- Initializing Inventory System ----");

// Initial inventory
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// 1. Data & Input Initialization
const productName = prompt("Enter new product name:");
const productPrice = Number(prompt("Enter product price:"));

// Validate user input
if (
    productName !== null &&
    productName.trim() !== "" &&
    Number.isFinite(productPrice) &&
    productPrice > 0
) {
    // Add new product to inventory
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });

    console.log(
        `Prompt executed: User adds "${productName.trim()}" at $${productPrice}`
    );
} else {
    console.log("Invalid input. Product was not added.");
}

// 2. Control Flow & Conditional Evaluation
function getCategory(price) {
    if (price >= 500) {
        return "Premium";
    } else if (price < 100) {
        return "Budget";
    } else {
        return "Standard";
    }
}

// 3. Loops & Flow Control
console.log("\n---- Processing Inventory Roster (forEach) ----");

inventory.forEach((item) => {
    console.log(
        `Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`
    );
});

// 4. Functions & Scope
function calculateTotal(items) {
    let total = 0;

    items.forEach((item) => {
        total += item.price;
    });

    return total;
}

// Arrow function for applying a discount
const applyDiscount = (price, discountPercentage) => {
    return price - (price * discountPercentage / 100);
};

// 5. Array Methods & Iteration
const affordableItems = inventory.filter((item) => item.price < 200);

const formattedReport = inventory.map((item) => {
    return `${item.name.toUpperCase()}: $${item.price}`;
});

// Financial Analytics
console.log("\n---- Financial Analytics ----");

console.log(`Total Inventory Value: $${calculateTotal(inventory)}`);

console.log(
    `Filtered Affordable Items (Under $200): ${
        affordableItems.map((item) => `"${item.name}"`).join(", ")
    }`
);

console.log("Formatted Report:", formattedReport);

// Example discount calculation
const discountPrice = applyDiscount(800, 10);

console.log(`Laptop Price After 10% Discount: $${discountPrice}`);