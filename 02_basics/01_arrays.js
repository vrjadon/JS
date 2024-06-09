// const myArr = [1,2,3,4,'vishwas', true] 
// can have diff types of elements
// resizeable 
// array-copy operations are shallow copy(original and copy both share same reference point )
//in deep copy, copy and original dont share same reference
const myArr = [1,2,3,4,5,6 ]
const myNewArr = new Array(1,2,3,4);

//array methods

// myArr.push(7); // [1, 2, 3, 4, 5, 6, 7]
// myArr.pop() //  [1, 2, 3, 4, 5, 6]
// myArr.unshift(0); // [0, 1, 2, 3, 4, 5, 6]  to insert value at start, but in case of large arrays can be a problem to shift all elements
// myArr.shift();  //[ 1, 2, 3, 4, 5, 6 ] remove element at first
// console.log(myArr.includes(8)); //false
// console.log(myArr.indexOf(8));  //-1

const newArr = myArr.join('-'); //1-2-3-4-5-6
//adds all elements of array to string separated by given separator
//console.log(typeof newArr); //string

//slice and splice

const arr = [1,2,3,4,5,6];
console.log("A ",arr);  //A  [ 1, 2, 3, 4, 5, 6 ]

//slice returns a copy of array from startIndex to endIndex-1
//doesnot change the original array
const arr2 = arr.slice(1,3);  
console.log("B ",arr);  //B  [ 1, 2, 3, 4, 5, 6 ]
console.log(arr2);  //[ 2, 3 ]

//splice returns the deleted elements of arr from startInde to endIndex
//changes the original array which doesnot contain the spliced elements
const arr3 = arr.splice(1,3);
console.log("C ",arr);  //C  [ 1, 5, 6 ]
console.log(arr3);  //[ 2, 3, 4 ]