let a = 5;
let b = 2;
// This all are used in Mathematics calculations like - addition, multiplication, subtraction, division.
// Values of a and b are 5 and 2 respectively
console.log("a = ", a, ", b = ", b); // Output: a = 5, b = 2
console.log("a + b =", a + b); // Addition
// You will get output like this: a + b = 7

console.log("a * b =", a * b); // Multiplication
// You will get output like this: a * b = 10

console.log("a - b =", a - b); // Subtraction
// You will get output like this: a - b = 3

console.log("a / b =", a / b); // Division
// You will get output like this: a / b = 2.5

// But there are more operators in JavaScript, like modulus, exponentiation, Increment, Decrement, etc.

// Modulus operator gives the remainder of the division of two numbers. It is represented by the symbol '%'. 
console.log("a % b =", a % b); // Modulus
// You will get output like this: a % b = 1

// Exponentiation operator is used to show the power of a number which means that if we say a to the power of b, it means that we will multiply a by itself b times. It is represented by the symbol '**'.
console.log("a ** b =", a **b); // Exponentiation
// You will get output like this: a ** b = 25

// Before we talk about Increment and Decrement operators, let me tell you something very interesting that is, In Mathematics, we need two numbers to perform any operations either add, subtract, multiply, or divide. But in Javascript or specifically in programming languages, we can perform aoperations on a single number as well, and that is where Increment and Decrement operators come in.

// How? Let me show you.

// Increment operator is used to increase the value of a variable by 1. It is represented by the symbol '++'.   
a++;
console.log("a++ =", a);
// You will get output like this: a++ = 5
// now you see in the result that the value of a is 6

// Decrement operator is used to decrease the value of a variable by 1. It is represented by the symbol '--'.
a--; 
console.log("a-- =", a);
// You will get output like this: a-- = 5
// now you see in the result that the value of a is 5, because we have a value is 6 and after subtracting 1 from it, it becomes 5.

// Their are also another way to use Increment and Decrement operators, which is called
// 1. Post Increment (a++)
// 2. Pre Increment (++a)
// 3. Post Decrement (a--)
// 4. Pre Decrement (--a) 

// Where Post increment means that the value of the variable will be increased after the current operation is performed, and Pre increment means that the value of the variable will be increased before the current operation is performed. The same goes for Post Decrement and Pre Decrement.

// Example

let c = 5;
console.log("Post Increment (c++) = ", c++);
// You will get the value '5' because the value of c will be increased after the current operation is performed, which means that the value of c will be 6 after this line of code is executed.

let d = 10;
console.log("Pre increment (++d) = ", ++d);
// You will get the value '11' because the value of d will be increased before the current operation is performed, which means that the value of d will be 11 before this line of code is executed.

let e = 15;
console.log("Post Decrement (e--) = ", e--);
// You will get the value '15' because the value of e will be decreased after the current operation is performed, which means that the value of e will be 14 after this line of code is executed.   

let f = 20;
console.log("Pre Decrement (--f) = ", --f);
// You will get the value '19' because the value of f will be decreased before the current operation is performed, which means that the value of f will be 19 before this line of code is executed.
