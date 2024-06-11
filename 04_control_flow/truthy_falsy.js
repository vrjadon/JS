//falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN
//except these all are truthy values
//some surprising truth values => "0", 'false', " ", [], {}, function(){} 
//const userEmail = []; //logs good to go
const userEmail = ""; //no log
if(userEmail){
    console.log("good to go");
}

//to check if array is empty

const arr = [];
if(arr.length === 0){
    console.log("empty array");
}

//to check if object is empty

const emptyObj = {}
//Object.keys(emptyObj) will return array containing keys of the object
if(Object.keys(emptyObj).length === 0){
    console.log("empty object");
}

//Nullish Coalescing Operator(??) : null undefined
//used to provide default value incase of dealing with null/undefined values
//let val1 = 3 ?? 2  //3
//let val1 = null ?? 2  //2
//let val1 = undefined ?? 2 //2
//let val1  = null ?? undefined ?? 3 ?? 4 //3
//console.log(val1);

//ternary operator => condition ? true : false
const coldBrewPice = 550;
coldBrewPice <500 ? console.log("go have it") : console.log("ghar par hi bana lo");