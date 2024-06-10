//Immediately Invoked Function Expressions
//we don't want pollution from global scope
//also immediately invoked

//()() => first prentheses to write function definition and second to execute it

(function noob(){
    //named iife
    console.log("DB connected");
})();// ; needed to tell iife where to stop context

( (name) => {
    console.log(`DB 2 connected ${name}`);
} )("vrj");