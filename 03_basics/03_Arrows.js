const { log } = require("console");

const user = {
    userName : "Vishwas",
    age : 18,
    welcomeMsg : function(){
        //console.log(`${this.userName}, Welcome to our site`);  //to access current context, use 'this' keyword
        //console.log(this);
    }
}

user.welcomeMsg();  //Vishwas, Welcome to our site
user.userName = "Rinku"
user.welcomeMsg();
//console.log(this);  //{}

//global object in case of browser is window object

function noob(){
    let name = "Vishwas";
    //console.log(this.name);  //undefined
}

noob();

// const addTwo = (num1,num2)=>{
//     return num1+num2   //return needed with curly braces
// }
const addTwo = (num1,num2) =>  (num1+num2)  //another way, return not needed with parentheses

console.log( addTwo(2,3));

const kuchBHi = () => ({user : 'vishwas'})  //parentheses needed for return object
console.log(kuchBHi())  //{ user: 'vishwas' }