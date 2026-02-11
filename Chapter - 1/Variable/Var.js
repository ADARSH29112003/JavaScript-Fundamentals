// In JavaScript there are 3 different ways to represent Variables in JavaScript:
// 1- Var (Variable can be re-declared & updated. A Global scope variable).
// 2- let (Varible cannot be re-declared but can be updated.  A block scope variable).
// 3- const (Varible cannot be re-declared and cannot be updated.  A block scope variable).

// Note ------- In Industry, VAR don't used as much as after ES6 introduced in 2015.

// ***********************************************************************************************************
// Example for Var;------------------

// Fist we declared the value of age is 45
var marks = 45; 
// Now, again we declared the value of age is 56
var marks = 56;
// Again, we declared the value of age is 98
var marks = 98;
// So, the system will declared the last value of age is 98
console.log(marks);
// It is kind of very confusing when we are writing many code so that is the reason why in Industry Var don't use as much or not used anymore.
