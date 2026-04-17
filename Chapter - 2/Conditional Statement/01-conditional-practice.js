// Get user to input a number using prompt ("Enter a Number"). Check if the number is a multiple of 5 or not.

let num = prompt("Enter your number = "); 
console.log(num);

if(num % 5 === 0){
    console.log(num, "is multiple of 5");
} else {
    console.log(num, "is not multiple of 5")
}
