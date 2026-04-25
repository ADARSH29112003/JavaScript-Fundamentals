// // Question 3: Even or Odd Check

// let checkValue = 42;

// console.log(checkValue % 2);

// Tumhe kya karna hai:
// Output kya aayega → find karo
// Decide karo:
// Even hai ya Odd
// Reason likho (IMPORTANT)

let checkValue = 42;
let remainder  = checkValue % 2;

console.log("remainder = ", remainder); //When you divide 42/2 then quoteint remain 21 and remainder while be zero

if (remainder === 0){ // Here we check if the remainder number is zero then we have to print "Even number" and when we checked the remainder is "0", then system prints "Even Number"
    console.log("Even Number");
}
else {
    console.log("Odd Number");
}
