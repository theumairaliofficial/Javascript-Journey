// ===== FUNCTION DECLARATION =====

function greet(name) {
    console.log(`Hello ${name}!`);
}

greet("Umair");


// ===== FUNCTION EXPRESSION =====

let calculateTotal = function(price, qty) {
    return price * qty;
};

console.log(calculateTotal(1500, 3)); // 4500


// ===== HOISTING (declaration vs expression) =====

// Function declaration - call kar sakte hain pehle
sayHello();
function sayHello() {
    console.log("Hello!");
}

// Function expression - pehle call nahi kar sakte (TDZ)
// sayBye(); // Error
let sayBye = function() {
    console.log("Bye!");
};
sayBye();


// ===== ARROW FUNCTIONS =====

// Normal arrow function
let add = (a, b) => {
    return a + b;
};

// Short form (ek line ka code)
let multiply = (a, b) => a * b;

// Ek parameter (brackets optional)
let double = number => number * 2;

// Zero parameters (brackets zaroori)
let sayHi = () => console.log("Hi!");

console.log(add(10, 5));      // 15
console.log(multiply(10, 5)); // 50
console.log(double(5));       // 10
sayHi();                      // Hi!


// ===== DEFAULT PARAMETERS =====

function orderSummary(item, qty = 1, city = "Rawalpindi") {
    console.log(`${qty} ${item} will be delivered to ${city}`);
}

orderSummary("Shirt");               // 1 Shirt will be delivered to Rawalpindi
orderSummary("Trouser", 3);          // 3 Trouser will be delivered to Rawalpindi
orderSummary("Jacket", 2, "Lahore"); // 2 Jacket will be delivered to Lahore


// ===== REST PARAMETERS =====

function addAll(multiplier, ...numbers) {
    let i = 0;
    let total = 0;
    while (i < numbers.length) {
        total += multiplier * numbers[i];
        i++;
    }
    return total;
}

console.log(addAll(2, 5, 10, 15)); // 60


// ===== ANONYMOUS FUNCTION =====
// Woh function jiska koi naam nahi hota
// Kisi variable mein store karte hain ya argument ke taur pe pass karte hain

let greetAnonymous = function() {
    console.log("Hello from anonymous function!");
};

greetAnonymous();


// ===== IIFE (Immediately Invoked Function Expression) =====
// Declare hote hi khud chal jaata hai, alag se call karne ki zarurat nahi
// Andar ke variables bahar accessible nahi hote (scope protect hota hai)

(function() {
    let secret = "hidden variable";
    console.log("IIFE chala!");
    console.log(secret);
})();

// console.log(secret); // Error: secret is not defined bahar


// ===== SCOPE IN FUNCTIONS =====

let storeName = "Sapphire"; // global variable

function showScope() {
    let localVar = "Sirf function ke andar"; // local variable
    console.log(storeName); // global accessible hai
    console.log(localVar);
}

showScope();
// console.log(localVar); // Error: local variable bahar accessible nahi

// Shadowing: local variable global ko shadow karta hai
let price = 1000; // global

function showPrice() {
    let price = 5000; // local, global ko shadow karta hai
    console.log(price); // 5000, local wala use hoga
}

showPrice();
console.log(price); // 1000, global safe hai


// ===== NESTED FUNCTIONS =====
// Function ke andar function
// Andar wala function bahar wale ke variables access kar sakta hai

function outer() {
    let outerVar = "Outer";

    function inner() {
        console.log(outerVar); // inner, outer ke variables access kar sakta hai
    }

    inner();
}

outer();


// ===== PURE FUNCTION (good practice) =====
// Global variables ko directly modify mat karo
// Value return karo, bahar handle karo

let cartTotal = 0;

function addItem(cartTotal, price) {
    return cartTotal + price; // global modify nahi karta, return karta hai
}

cartTotal = addItem(cartTotal, 1500);
cartTotal = addItem(cartTotal, 2000);
console.log(cartTotal); // 3500


// ===== HIGHER ORDER FUNCTIONS =====
// Woh functions jo doosre functions ko argument ke taur pe lete hain
// Ya function return karte hain

// Function as argument
function calculate(a, b, operation) {
    return operation(a, b);
}

function remainder(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

console.log(calculate(10, 3, remainder)); // 1
console.log(calculate(10, 3, power));     // 1000

// Anonymous arrow function seedha argument ke taur pe pass karna
console.log(calculate(10, 3, (a, b) => a % b));  // 1
console.log(calculate(10, 3, (a, b) => a ** b)); // 1000

// Real example: discount apply karna
function applyDiscount(price, discountFn) {
    return discountFn(price);
}

console.log(applyDiscount(1500, price => price - (price * 10 / 100))); // 1350
console.log(applyDiscount(1500, price => price - (price * 20 / 100))); // 1200