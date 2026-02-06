// This is the first Primitive data type which is ''Number''
let age = 24;
let price = 100.50;
let totalexpense = -100.50;
// This is the 2nd Primitive data type which is ''String''
let Fullname = "Tony stark";
let Address = "New Delhi";
let Title = "Project Grind";
// This is the 3rd Primitive data type which is "Boolean"
isfollow = true;
isSubscribe = false;
// This is the 4th Primitive data type which is "Undefined" (by default = Every value is undefined until the value is given)
let a;
let b;
let c;
var z;
// This is the 5th Primitive data type which is "Null"
// Very intersting Primitive data type, this is the only data type which is also an object
// "NULL" means an absence of an object
let j = null;
let x = null;
let cv = null;

// Note - All the above primitive data type from Number, String, Boolean, Undefined, and Null they all are used generally but other data types like - "bigInt" and "Symbol"

// Now, Let understand "BigInt" and "Symbol".

let y = BigInt("76859403921");
// and in 'BigInt' you will notice that in the end of the number small "n" while be there.
// like in aove case you will see "76859403921n".

// Now, let's talk about "Symbol".
let h = Symbol("Hello!");

// ------------------------------------------------------------------------------------------------------------------

// Now we will discuss about Non-Primitive Data type which is only an "object"

// "Object" - An Object is like a box that stores many related information together using name + value pairs.
// or in other words, "Objects" is a collection of Values 

// for example - If we want to store a data for 'Students' we have to store such data like-
// - name {String data type}
// - age {Number data type}
// - marks {number data type}
// - isPass {Boolean data type}

// So, we can store all the above data in an "Object" like this -

const student = {
    name: "Tony Stark",
    age: 24,
    marks: 95,
    isPass: true, 
};

to access the data from the above "Object" we use this method - 
    student["name"] // this will give us the value of name which is "Tony Stark"
    student["age"] // this will give us the value of age which is 24
    student["marks"] // this will give us the value of marks which is 95
    student["isPass"] // this will give us the value of isPass which is true

