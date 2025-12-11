// Shopping Cart Program
// This program simulates a shopping cart with discount and tax calculations

console.log("=== Welcome to the Shopping Cart Program ===\n");

// Step 1: Get the number of items from user
let numItemsInput = prompt("How many items are you purchasing? ");
let numItems = parseInt(numItemsInput);

// Step 2: Create arrays to store item information
let itemNames: string[] = [];
let itemPrices: number[] = [];

// Step 3: Initialize variables for calculations
let subtotal = 0;
let discountAmount = 0;
let hstAmount = 0;
let finalTotal = 0;

// Step 4: Get item details using a loop
console.log("\n--- Enter Item Details ---");
for (let i = 0; i < numItems; i++) {
    // Get item name
    let itemName = prompt("Enter item name #" + (i + 1) + ": ");
    itemNames.push(itemName);
    
    // Get item price
    let itemPriceInput = prompt("Enter price for " + itemName + ": $");
    let itemPrice = parseFloat(itemPriceInput);
    itemPrices.push(itemPrice);
    
    // Add to subtotal
    subtotal = subtotal + itemPrice;
}

// Step 5: Display shopping cart contents
console.log("\n=== SHOPPING CART SUMMARY ===\n");

// Display all items in cart
console.log("Your shopping cart includes: " + itemNames.join(", "));
console.log("The total amount of items in your shopping cart is " + numItems + "\n");

// Display subtotal
console.log("The subtotal cost of your shopping trip was $" + subtotal.toFixed(2));

// Step 6: Check for discount eligibility
if (subtotal > 350) {
    discountAmount = subtotal * 0.10;  // 10% discount
    console.log("You are eligible for a discount of $" + discountAmount.toFixed(2));
} else {
    console.log("No discount applied (subtotal must be over $350.00 for discount)");
}

// Step 7: Calculate HST and final total
let subtotalAfterDiscount = subtotal - discountAmount;
hstAmount = subtotalAfterDiscount * 0.13;  // 13% HST
finalTotal = subtotalAfterDiscount + hstAmount;

// Step 8: Display final calculations
console.log("The HST is $" + hstAmount.toFixed(2));
console.log("The total is $" + finalTotal.toFixed(2));

// Step 9: Display detailed receipt
console.log("\n=== DETAILED RECEIPT ===");
console.log("Item\t\t\tPrice");
console.log("----\t\t\t-----");
for (let i = 0; i < numItems; i++) {
    console.log(itemNames[i] + "\t\t\t$" + itemPrices[i].toFixed(2));
}

console.log("\n----------------------------");
console.log("Subtotal:\t\t$" + subtotal.toFixed(2));
if (discountAmount > 0) {
    console.log("Discount (10%):\t\t-$" + discountAmount.toFixed(2));
    console.log("Subtotal after discount:\t$" + subtotalAfterDiscount.toFixed(2));
}
console.log("HST (13%):\t\t$" + hstAmount.toFixed(2));
console.log("TOTAL:\t\t\t$" + finalTotal.toFixed(2));
console.log("\nThank you for shopping with us!");
