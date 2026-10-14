
const subtotal = Number(prompt("Enter your sub total amount:"));
const tipPercentage = Number(prompt("Enter tip percentage:"));

const calculatedTip = subtotal * tipPercentage / 100;
const totalAmount = subtotal + calculatedTip;

console.log(`Subtotal: $${subtotal}`);
console.log(`TipPercentage: ${tipPercentage}%`);
console.log(`CalculatedTip: $${calculatedTip}`);
console.log(`TotalAmountToPay: $${totalAmount}`);
