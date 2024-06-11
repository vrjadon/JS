//for..of

const arr = [1,2,3,4,5]
for(num of arr){
    //console.log(num);
}

const greetings = "Hola Amigo"
for(greet of greetings){
    if(greet==" "){
        continue;
    }
    //console.log(`${greet}`);
}

//Maps => map object holds key value pairs and remembers the original order of insertion of keys

const map = new Map();
map.set("IN", "India");
map.set("USA","United States of America")
map.set("UK", "United Kingdom")
map.set("AUS", "Australia")
map.set("SK", "South Korea")

//console.log(map);

for(const [key,value] of map){
    //console.log(key, " :- ", value);
}
// [key, value] => syntax to destructure key value pairs`

const myObject = {
    game1 : 'nfs',
    game2 : "bgmi"
}

// for(const [key,value] of myObject){
//     console.log(key,value);
// } //not iterable like this

// use for..in loop for objects

for(const key in myObject){
    console.log(key , myObject[key]);
}

//for..in when applied on arrays gives keys/index

const myArr = ['js','c++','ruby','python'];

//to print all elements of array
for(const key in myArr){
    console.log(myArr[key]); 
}

//cant iterate on map using for..in

for(const key in map){
    console.log(key);
}