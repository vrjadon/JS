
if(true){
    let a =10;
    const b= 20;
    var c =30;
}

// console.log(a);  a not defined
// console.log(b); b not defineed
//console.log(c);  //30

//this is the problem with var, accessible even outside of scope

function one(){
    const name = "vishwas"

    function two(){
        const age = 18
        console.log(name);  //this is ok
    }
    //console.log(age); will throw error, age's scope is
    two();
}
//one();

//*******************mini hoisting */

console.log(addOne(3)); //4, throws no error evenif function called before initialization 

function addOne(num){    //Function declarations are hoisted. 
    return num+1;        //This means the entire function definition is moved to the 
                          //top of the scope before the code is executed
}

console.log(addTwo(3));   //throws error, Cannot access 'addTwo' before initialization


//Function expressions assigned to variables declared with let or const are not hoisted 
//in the same way. While the variable name is hoisted, its assignment is not
const addTwo = function(num){
    return num+2;  
}
