// ===== PROMPT, NUMBER CONVERSION, NaN =====
let itemName = prompt("Enter Item Name: ");
let price = Number(prompt("Enter Price: "));
let qty = Number(prompt("Enter Quantity: "));
if (isNaN(price) || isNaN(qty)) {
    console.log("Invalid Input! Please make sure all inputs are correct");
} else {
    let total = price * qty;
    console.log(`Item: ${itemName}     Total: ${total}`);
}

// ===== IF / ELSE IF / ELSE LADDER (mutually exclusive) =====
let cartTotal = 5500;
if (cartTotal >= 5000) {
    console.log("VIP tier: 20% discount");
} else if (cartTotal >= 3000) {
    console.log("Gold tier: 10% discount");
} else if (cartTotal >= 1000) {
    console.log("Silver tier: 5% discount");
} else {
    console.log("No discount tier");
}

// ===== MULTIPLE SEPARATE IF (independent conditions) =====
let isFirstOrder = true;
let hasCoupon = true;
let cartTotal2 = 5500;
if (isFirstOrder) {
    console.log("Welcome bonus: 5% extra");
}
if (hasCoupon) {
    console.log("Coupon discount: 10% extra");
}
if (cartTotal2 >= 5000) {
    console.log("VIP tier: 20% discount");
}

// ===== && and || =====
let isLoggedIn = true;
let cartTotal3 = 3000;
if (isLoggedIn && cartTotal3 > 2000) {
    console.log("Free shipping for logged in users with cart over 2000");
}
let isPremiumUser = false;
if (isPremiumUser || cartTotal3 > 2000) {
    console.log("Free shipping eligible");
}

// ===== ! (NOT) =====
let stock = 0;
let isAvailable = Boolean(stock);
console.log(isAvailable);   // false
console.log(!isAvailable);  // true
if (!isAvailable) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// ===== NESTED IF / ELSE =====
let isLoggedIn2 = true;
let cartTotal5 = 3000;

if (isLoggedIn2) {
    if (cartTotal5 > 2000) {
        console.log("Free shipping applied");
    } else {
        console.log("Shipping charges apply");
    }
} else {
    console.log("Please login first");
}

// ===== TERNARY OPERATOR =====
let cartTotal4 = 2500;
let shippingMessage = cartTotal4 >= 2000 ? "Free Shipping" : "Shipping Charges Apply";
console.log(shippingMessage);

// ===== SWITCH STATEMENT =====
let membershipLevel = "Gold";
switch (membershipLevel) {
    case "Silver":
        console.log("5% discount");
        break;
    case "Gold":
        console.log("10% discount");
        break;
    case "Platinum":
        console.log("20% discount");
        break;
    default:
        console.log("No discount");
        break;
}

// Multiple cases sharing same code
let fruit = "Mango";
switch (fruit) {
    case "Banana":
    case "Mango":
        console.log("Yellow");
        break;
    case "Apple":
        console.log("Red");
        break;
    default:
        console.log("Unknown fruit");
        break;
}

// switch(true) for complex conditions
let age = 25;
switch (true) {
    case (age < 13):
        console.log("Child");
        break;
    case (age < 20):
        console.log("Teenager");
        break;
    case (age >= 20):
        console.log("Adult");
        break;
}

// ===== BREAK (loop se completely bahar nikalna) =====
for (let i = 1; i <= 20; i++) {
    if (i > 15) {
        break;
    }
    if (i % 3 === 0) {
        console.log(`Number ${i} is divisible by 3`);
    }
}

// ===== CONTINUE (sirf current iteration skip karna) =====
let total = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    total += i;
}
console.log("Sum of odd numbers 1-10:", total); // 25