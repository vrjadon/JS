const marvel_heroes = ["ironman", "thor", "spiderman"];
const dc_heroes = ["superman", "batman", "flash"];

// marvel_heroes.push(dc_heroes)  //takes dc_heroes array as single element 
// console.log(marvel_heroes); //[ 'ironman', 'thor', 'spiderman', [ 'superman', 'batman', 'flash' ] ] 
// console.log(marvel_heroes[3][1]);  //batman

const allHeroes = marvel_heroes.concat(dc_heroes);
//console.log(allHeroes); //[ 'ironman', 'thor', 'spiderman', 'superman', 'batman', 'flash' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]  
//spread operator => takes an array and spreads out its elements
//console.log(all_new_heroes); //[ 'ironman', 'thor', 'spiderman', 'superman', 'batman', 'flash' ]

const another_array = [1,2,3,[4,5,6],[7,[8,9,10]]];
const real_another_array = another_array.flat(Infinity);  //used to flatten nested arrays to whatever level specified
//console.log(real_another_array); //[1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// console.log(Array.isArray("Aman"));  //false
// console.log(Array.from('Aman'));  //[ 'A', 'm', 'a', 'n' ] 
// console.log(Array.from({name : "tHALA"})); // [] BECAUSE it needs to know whether to make array from keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));  //[ 100, 200, 300 ]