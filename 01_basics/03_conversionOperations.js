let score = "33"

//console.log(typeof(score)) //string

let valueInScore = Number(score)

//console.log(typeof valueInScore);   //number
//console.log(valueInScore)   //33

score = "33abc"

valueInScore = Number(score)    
//console.log(typeof valueInScore)   //number
//console.log(valueInScore)         //NaN since score was not pure number

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)   
// console.log(booleanIsLoggedIn);        //true


// 1 => true ; 0 => false
// "" => false; "non empty" => true 

let num = 35
let stringNum = String(num);
// console.log(stringNum);   //35
// console.log(typeof stringNum)   //string


//***********Operations*******

let value = 3
let negValue = -value
// console.log(negValue);   //-3

let str1 = "Vishwas"
let str2 = "Raj"
let str3 = str1 + str2;
// console.log(str3);  //VishwasRaj

console.log(1+"2");    //12
console.log("1"+2);    //12
console.log("1"+2+2);    //122
console.log(1+2+"2");    //32

//if string is first, all value coming later will be treated as string 
//if string comes later, first operation between non stringvalues will go on like normal and then they will be treated like strings 