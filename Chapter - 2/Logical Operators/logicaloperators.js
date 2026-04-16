//Logical Operators

// Logical Operators are little bit different from "Comparison Operators" where Comparison operators are compare with one Value to another value but "Logical Operators" evaluate multiple expressions to give a final result, and the result is always either true or false. 

//Where there are 3 different type of logical Operators:
// 1. Logical AND (&&)
// 2. Logical OR (||)
// 3. Logical NOT (!)

// Logical AND (&&) -> Both expression should be true if one false then it return it give false

let age = 20;
let hasID = true;

if (age >= 18 && hasID === true) {
  console.log("Entry Allowed");
} else {
  console.log("Entry Denied");
}

// Logical OR (||) -> If one of expression(conditions) are true it declared true value

let isRaining = false;
let hasUmbrella = true;

if (isRaining === false || hasUmbrella === true) {
  console.log("You can go outside");
} else {
  console.log("Stay at home");
}

// Logical NOT (!) -> If expression is true it declared False, If expression is false then it declared true value.

let isSleeping = false;

if (!isSleeping) {
  console.log("You can study");
} else {
  console.log("Go to sleep");
}