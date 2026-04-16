//Problem 4

// You are given:
// let age = 20;
// let hasID = true;
// let isBanned = false;

//  Task
//  Print:

// "Full Access" if:
// age >= 18
// AND hasID
// AND NOT banned
// otherwise "Restricted"
// ⚠️ Rules

// 👉 Use:

// &&
// !

let age = 20;
let hasID = true;
let isBanned = false;

if(age>=18 && hasID && !isBanned){
    console.log("Full Access");
}
else {
    console.log("Restricted");
}

// Problem 5
// let isRaining = true;
// let hasUmbrella = false;
// let hasCar = true;
// 🎯 Task

// 👉 Print:

// "You can go outside" if:
// NOT raining
// OR umbrella
// OR car
// otherwise "Stay home"
// ⚠️ Condition Hint

// 👉 Use combination of:

// !
// ||

let isRaining = true;
let hasUmbrella = false;
let hasCar = true;

if(!isRaining || hasUmbrella || hasCar){
    console.log("You can go outside");
}
else{
    console.log("Stay Home");
}