//Strings is a sequences of characters used to represent text
// How we write strings in Js

let str = "Adarsh Singh Solanki"; //20

//Valid way to write a strings in Js

let str2 = 'Averona'; //7   

//to access in console panel we have to write str to print "str",
//same goes for str2.

//Their are properties called str.length - this properties count all the space are available like 

//If we count "Averona" - here we see: - 

// 1 - A
// 2 - v 
// 3 - e
// 4 - r
// 5 - o
// 6 - n
// 7 - a 

// So, str2.length gives output - 7

// Note - length properties also count space all 

// example - "Adarsh Singh Solanki" - Adarsh gives '6', Singh gives '5', Solanki gives '7', so it gives 6+5+7 = 18 right? No, it also count space between them so in "Adarsh Singh Solanki" have 2 space so, 18 + 2 = 20.

// str.length mein ek or khass baat hoti hai like we can particular print an alphabet of given strings. Nahi saamjh aaya wait let me show you above you see, 

// str2 = 'Averona'

// So agar humko "Averona" ka sirf "A" print krwana hai toh kaisa karenge, so in programming basics in memory things stored from zero "0" to depends ki uska andar kya store ho raha hai, so Averona length is 7 right but n back side of storing this in memory is stores like 0,1,2,3,4,5,6 only where, 

// 0 - A
// 1 - v 
// 2 - e
// 3 - r
// 4 - o
// 5 - n
// 6 - a 

// so we write this,

console.log(str2[0]); //"A" will be print