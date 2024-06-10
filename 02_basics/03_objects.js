//singleton => Object.create
//object literals
const mySym = Symbol("key1");

const JsUser = {
    name : "Vishwas",
    "full name" : "Vishwas Raj Jadon",
    age : 20,
    [mySym] : "myKey1",  //have to put symbol in [] in object
    location : "Khurja",
    email : "vrjadon3@gmail.com",
    isLoggedIn : false,
    lastLoginDays :["Friday", "Saturday"]
}
//console.log(JsUser.location);  //Khurja
//console.log(JsUser[location]);  //cannot access like this because all keys are being processed like strings
//console.log(JsUser["location"]); //Khurja
// JsUser.full name will throw error
// console.log(JsUser["full name"]);  // Vishwas Raj Jadon 
// console.log(JsUser[mySym]);  //myKey1

JsUser.email = "vishwas.jadon@s.amity.edu"
// Object.freeze(JsUser);  //locks the values in given object
// JsUser.email = "xyz@gmail.com"
// console.log(JsUser.email);  //vishwas.jadon@s.amity.edu

JsUser.greeting = function(){
    return "Hola Amigo"
}

// console.log(JsUser.greeting);  // [Function (anonymous)]
console.log(JsUser.greeting());  //Hola Amigo  

JsUser.greetingTWO = function(){
    return `Hola, ${this.name}`    // this helps in accessing the object's all properties
}
console.log(JsUser.greetingTWO());  // Hola, Vishwas