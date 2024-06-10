const instaUser = new  Object();

instaUser.id = "123abc"
instaUser.name = "Rohan"
instaUser.isLoggedIn = true

//console.log(instaUser);  // { id: '123abc', name: 'Rohan', isLoggedIn: true }

const fbUser = {
    email : "xyz@gmail.com",
    fullname : {
        userfullname : {
            firstNmae : "Vishwas",
            middleName : "Raj",
            lastName : "Jadon"
        }
        }
}

//console.log(fbUser.fullname); //{serfullname: { firstNmae: 'Vishwas', middleName: 'Raj', lastName: 'Jadon' } }
//console.log(fbUser.fullname.userfullname.lastName);  //Jadon

// const obj1 = {1 : 'a', 2 : 'b', 3 : 'c'};
// const obj2 = {4 : 'd', 5 : 'e', 6 : 'f'};
// //combining objects
// const obj3 = {...obj1, ...obj2};
// console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } 

//f there were overlapping keys between obj1 and obj2, the values from obj2 would overwrite the values from obj1.



// console.log(obj3);
// // Outputs: { '1': 'a', '2': 'd', '3': 'c', '4': 'e' }

// const obj1 = {1:'a', 2: 'b'}
// const obj2 = {3:'a', 4: 'b'}
// const obj3 = {5:'a', 6: 'b'}

// const obj4 = Object.assign({},obj1,obj2,obj3);
// console.log(obj4);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj1 = {1:'a', 2: 'b'}
// const obj2 = {2:'c', 4: 'b'}
// const obj3 = {5:'a', 4: 'd'}

// const obj4 = Object.assign({},obj1,obj2,obj3); //{ '1': 'a', '2': 'c', '4': 'd', '5': 'a' }
// console.log(obj4);  //overwtire for overlapping keys also happens here

// const obj1 = {1: 'a', 2: 'b', 3: 'c'};
// const obj2 = {2: 'd', 4: 'e'};

// const obj3 = {...obj1, ...obj2};   most used

// console.log(Object.keys(instaUser));  //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(instaUser)); // [ '123abc', 'Rohan', true ]
// console.log(Object.entries(instaUser)); //[ [ 'id', '123abc' ], [ 'name', 'Rohan' ], [ 'isLoggedIn', true ] ]
// console.log(Object.hasOwnProperty("isLoggedIn"));  //false

//*************************** Object de-structuring *************/
 
const course = {
    courseName : "JS Basics",
    price : "999",
    courseStudent : "Vishwas"
}

//course.courseStudent
const {courseStudent : student} = course
console.log(student); //Vishwas