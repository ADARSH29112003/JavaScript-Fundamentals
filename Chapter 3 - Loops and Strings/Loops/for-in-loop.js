// for...in kya hota hai?

// Object ke keys (properties) ko loop karne ke liye use hota hai means jo objects ke andar jo keys hai unko ek-ek krke access krna

// ------------Syntax---------------

// for (let key in object){
//     //kaam
// }

let person = {
    name: "Adarsh", // key is - Name
    age: 22, // key is - Age
    city: "Varanasi" // key is city
};

for (let key in person){
     //person = objects
    //  console.log(key);
    //  console.log(person[key]);

    //  console.log("key = ", person[key]);
    // console.log(key);
    console.log("key = ", key, ", Object = ", person[key]);

}

//Output

// key =  name , Object =  Adarsh
// key =  age , Object =  22
// key =  city , Object =  Varanasi
