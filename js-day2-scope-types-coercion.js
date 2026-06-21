// ===== SCOPE =====

// Global scope - accessible everywhere
let storeName = "Sapphire";

function showScope() {
    // Function scope - only accessible inside this function
    let discountPercent = 10;

    if (true) {
        // Block scope - only accessible inside this if block
        let extraDiscount = 5;
        console.log("Inside block:", extraDiscount);
    }

    console.log("Function scope:", discountPercent);
    console.log("Global scope:", storeName);
}

showScope();


// ===== TEMPORAL DEAD ZONE (TDZ) =====

// console.log(price); // Would throw error - TDZ
let price = 1500;
console.log("After declaration:", price);


// ===== ASSIGNMENT OPERATORS =====

let cartTotal = 0;
cartTotal += 1500; // add item
cartTotal += 2000; // add another item
cartTotal -= 500;  // apply discount
console.log("Cart total:", cartTotal);


// ===== PRIMITIVE DATA TYPES =====

let productName = "Lawn Suit"; // string
let productPrice = 3500;       // number
let isAvailable = true;        // boolean
let discount;                  // undefined
let selectedSize = null;       // null

console.log(typeof productName);
console.log(typeof productPrice);
console.log(typeof isAvailable);
console.log(typeof discount);
console.log(typeof selectedSize); // "object" - known JS bug


// ===== TYPE COERCION =====

// Common bug: string + number from form data
let priceFromForm = "1500"; // string, as if from HTML form
let quantity = 2;

let wrongTotal = priceFromForm + quantity;
console.log("Wrong (coercion bug):", wrongTotal); // "15002"

let correctTotal = Number(priceFromForm) * quantity;
console.log("Correct (explicit conversion):", correctTotal); // 3000


// ===== BOOLEAN / TRUTHY-FALSY =====

console.log(Boolean(0));        // false
console.log(Boolean(100));      // true
console.log(Boolean(""));       // false
console.log(Boolean("Umair"));  // true