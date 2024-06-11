const myArr = [1,2,3,4,5]

// const myTotal = myArr.reduce((acc,currVal)=>{
//     console.log(`accumulator : ${acc} and current Value : ${currVal}`);
//     return acc+currVal
// },0)
// const myTotal = myArr.reduce((acc,curVal)=>acc+curVal)
// console.log(myTotal);

const bookCart = [
    {
        bookName : "Atomic Habits",
        price : 300
    },
    {
        bookName : "Shoe Dog",
        price : 400
    },
    {
        bookName : "A Shot at History",
        price : 250
    },
    {
        bookName : "Angles and Demons",
        price : 450
    },
    {
        bookName : "12 Rules of Life",
        price : 500
    }
]

const bookCartTotal = bookCart.reduce((acc,item)=>{
    return item.price+acc;
},0)
console.log(bookCartTotal);