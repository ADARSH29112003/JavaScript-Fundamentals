// Find the value of finalValue and final value of counter:

// let counter = 4;
// let finalValue = counter++ + ++counter + counter++;

let counter = 4;

// console.log("counter++ = ", counter++) //4
// console.log("++counter = ", ++counter) //6
// console.log("counter++ = ", counter++) //6 
let finalValue = counter++ + ++counter + counter++;


console.log("finalValue = ", finalValue);
console.log("counter = ", counter);