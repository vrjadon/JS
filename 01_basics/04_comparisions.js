// console.log("2">1);  //true
// console.log("02">1);  //true

//JS automstically converts string to number

// console.log(null>0);   //false
// console.log(null==0);  //false
// console.log(null>=0);  //true
// console.log(null<0);   //false
// console.log(null<=0);  //true

//reason is that equality check == and comparisions >,<,>=,<= work differently
// in case of comparisions null is converted to a number, treating it as 0

console.log(undefined==0);  //false
console.log(undefined>0);   //false
console.log(undefined>=0);  //false

//undefined will always return false on comparision

// ==== => strict equality check(value and data tpe both should be same)

// console.log('2'==2);  //true
console.log("2" === 2)   //false

