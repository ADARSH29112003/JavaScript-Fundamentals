// Problem 1: Driving Eligibility (LeetCode Style)

// 👉 You are given:

// let age = 19;
// let hasLicense = true;

// 🎯 Task

// 👉 Write a program that:

// Prints "Can Drive" if the person is eligible
// Otherwise prints "Cannot Drive"

// ⚠️ Rules
// A person can drive only if:
// age is at least 18
// AND the person has a license

// 🧠 Constraints
// Do not hardcode output
// Use logical operators
// Use if-else

// 📌 Example
// Input:
// age = 20, hasLicense = true

// Output:
// Can Drive
// Input:
// age = 16, hasLicense = true

// Output:
// Cannot Drive
// 🎯 Your Goal

// 👉 Think like this:

// “Condition kya hai?”
// “Kab true hoga?”

let age1 = 19;
let hasLicense = true;

if (age1>=18 && hasLicense === true){
    console.log("Can Drive")
}
else {
    console.log("Cannot Drive")
}

