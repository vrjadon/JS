function sayMyName(){
    console.log("V");
    console.log("R");
    console.log("J");
}

// sayMyName(); // V R J

function addTwoNums(a,b){
    return a+b;
}
let result = addTwoNums(1,2); 
//console.log(result); //3

function loginUserMessage(username="tempu"){   //default value
    if(!username){
        return "please enter a username"
    }
   return `${username} just logged in`
}

// console.log(loginUserMessage("VRJ"));   //VRJ just logged in
// console.log(loginUserMessage(""));   //   just logged in
// console.log(loginUserMessage());  //tempu just logged in

function calculateCartPrice(val1,val2,...num1){      //rest operator
    return num1;
}

console.log(calculateCartPrice(100,200,300,400,500));  //[ 300, 400, 500 ]

let user = {
    name : "Vishwas",
    price : 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price} `);
}

//handleObject(user) //Username is Vishwas and price is 999 
handleObject({
    name : "Rinku",
    price : 29
})

const newArray = [1,2,3,4];
function returnSecondElement(getArr){
    return getArr[1];
}

console.log(returnSecondElement(newArray));  //2