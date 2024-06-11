//for..each loop 

const coding = ["js", "ruby", "cpp", "python", "java"]
// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// });

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe); //note that only reference has to be given(printMe) and dont excute it(printMe())

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})

const myCoding = [
    {
        language : "javascript",
        filename : "js"
    },
    {
        language : "python",
        filename : "py"
    },
    {
        language : "java",
        filename : "java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.filename);
})