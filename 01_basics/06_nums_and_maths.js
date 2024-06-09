const score = 400;
const num = new Number(200);

// console.log(score);  //400
// console.log(num);  //[Number: 200]

// console.log(num.toString().length);  //3
// console.log(num.toFixed(3));  //200.000

const otherNumber = 123.896
// console.log(otherNumber.toPrecision(3));  //124

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));  //1,00,00,000

//+++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);  //Object [Math] {}
// console.log(Math.abs(-3.3));  //3.3
// console.log(Math.round(3.3)); //3
// console.log(Math.ceil(3.3));  //4
// console.log(Math.floor(3.3));  //3

// console.log(Math.random());   //value always between 0 and 1 
// console.log(Math.random()*10+1); 

const min = 100;
const max = 200;

console.log(Math.floor(Math.random()*(max-min+1))+min);  //formula to get random values between a specificed range 