

// 7 primitie Data Types => String, Number, Boolean, undefined, null, BigInt, Symbol
// (call by value)

// Non-Primitive/Reference => Array, Object, Functions
// (call by reference)


//dynamically typed(we dont need to specifically mention data type while defning variable)
let score  = 100;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id==anotherId);  //false

const bigNumber = 3128423768348527412478n ; //put n at end for BigInt

const heroes = ["Spider Man", "Iron Man", "Wonder Woman", 'Captain America'];  //array
console.log(typeof heroes);  //object
let myDetails = {      //object
    name : "Vishwas",
    city : "Khurja",
    gender : "Male"
}

let myFunction = function(){       //function
    console.log("Hello");
}
console.log(typeof myFunction);    //function

// Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//+++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitve) , Heap(Non Primitve)

let myEmail = 'vrjadon3@gmail.com';
let anotherMail = myEmail;
console.log(anotherMail);    //vrjadon3@gmail.com

anotherMail = 'vrj@gmail.com';
console.log(myEmail);  //vrjadon3@gmail.com
console.log(anotherMail); //vrj@gmail.com

// changing anotherMail's value did not change myEmail value because 
//in case of Primitive data types values stored in stack and passed as copy 

let user1 = {
    name : "Ram",
    city : "Pune"
}

let user2 = user1;  // user2 references the same object as user1

user2 = {                     
    name : 'Nitin',          
    city : 'Lucknow'
}
//This creates a new object and assigns it to user2. 

console.log(user1);  //{ name: 'Ram', city: 'Pune' }
console.log(user2); //{ name: 'Nitin', city: 'Lucknow' }

let user3 = user1;   // user3 references the same object as user1
user3.city = 'Chennai' // This modifies the object referenced by both user1 and user3


console.log(user1);  //{ name: 'Ram', city: 'Chennai' }
console.log(user3);  //{ name: 'Ram', city: 'Chennai' }