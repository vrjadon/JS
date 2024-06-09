let myDate = new Date();

// console.log(myDate);  //2024-06-09T06:15:26.828Z
// console.log(myDate.toString());  //Sun Jun 09 2024 11:45:26 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Sun Jun 09 2024
// console.log(myDate.toISOString());  //2024-06-09T06:16:45.086Z
// console.log(myDate.toJSON());  //2024-06-09T06:17:32.494Z 
// console.log(myDate.toLocaleString());  //6/9/2024, 11:48:37 AM 
// console.log(typeof myDate);  //object

//let myCreatedDate = new Date(2023, 0, 19); 
// let myCreatedDate = new Date(2023, 0, 19 ,5 ,3, 33); 
// console.log(myCreatedDate.toLocaleString());  // 1/19/2023, 5:03:33 AM 

// let myCreatedDate = new Date("2024-09-02");  // 9/2/2024, 5:30:00 AM
let myCreatedDate = new Date("02-09-2023");
// console.log(myCreatedDate.toLocaleString());  // 2/9/2024, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);  //1717914690173  time is ms 
console.log(myCreatedDate.getTime()); //time in ms since 1970
console.log(Math.floor(myTimeStamp/1000));  //to convert in seconds

//`${newDate.getTime()}`
myCreatedDate.toLocaleString('default',{
    weekday : "long"
})
//this way we can give properties 