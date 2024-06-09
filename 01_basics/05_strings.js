let myName = 'Vishwas'
let language = 'JavaScript'

console.log(`Hello, My name is ${myName} and I am learning ${language} language`);  //string interpolation

const gameName = String('vrjadon');

console.log(gameName[1]);  //r
console.log(gameName.__proto__);  //{}, in browser it will show all functions available
console.log(gameName.length);  //7
console.log(gameName.toUpperCase()); //VRJADON
// original values doesnot get changed

console.log(gameName.charAt(5));  //o
console.log(gameName.indexOf('x'));  //-1

const newString = gameName.substring(0,3);  //two arguments one startIndex and second length
console.log(newString);  //vrj

const anotherString = gameName.slice(-7,4);  //both arguments for slice are indexes, first being start index and second endIndex
console.log(anotherString);

const newStringOne = '  noob  ';
console.log(newStringOne.trim()); //noob

const url = "vrjadon33@gmail.com"
console.log(url.replace('33','')); //vrjadon@gmail.com
console.log(url.includes('.com')); //true
console.log(url.split('.'));  //[ 'vrjadon33@gmail', 'com' ]