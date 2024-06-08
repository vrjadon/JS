const accountId = 1;     
let accountName = "Vishwas";
var accountPassword = "password";    //prefer not to use var because of problem with block scope and functional scope 
accountCity = "Delhi";
let accountState;       // value undefined

// accountId = 2;     cannot change value of const variable
console.log(accountId);

accountName = "Vishwas Raj Jadon";
accountPassword = "new password";
accountCity = "New Delhi"

console.table([accountId,accountName, accountPassword, accountCity]);   //logs all listed variables in table format
