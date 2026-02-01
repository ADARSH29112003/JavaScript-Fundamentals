// In JavaScript there are 3 different ways to represent Variables in JavaScript:
// 1- Var (Variable can be re-declared & updated. A Global scope variable).
// 2- let (Varible cannot be re-declared but can be updated.  A block scope variable).
// 3- const (Varible cannot be re-declared and cannot be updated.  A block scope variable).

// Note ------- In Industry, VAR don't used as much as after ES6 introduced in 2015.

// ***********************************************************************************************************
// Example for Var;------------------

// Fist we declared the value of age is 45
// var age = 45; 
// Now, again we declared the value of age is 56
// var age = 56;
// Again, we declared the value of age is 98
// var age = 98;
// So, the system will declared the last value of age is 98
// console.log(age);
// It is kind of very confusing when we are writing many code so that is the reason why in Industry Var don't use as much or not used anymore

// ******************************************************************************************************************

// Let 

// Here we decalred the age using let
// let age = 45;
// let age = 67; so here system while show error so if you want to change the value so in the next line use only 'age' and then declared the value, See in the next line.
// age = 67;
// Now you check you will see the value of age is changed and now current age will be '67'
// console.log(age);


// const


// Here we declared the age using const

const PI = 78;
// now you can't change or update PI 

// if I print the value the PI while be '78' but
// if we use only PI and then change the value it still don't change where in 'let' we change

PI = 70;
console.log(PI);