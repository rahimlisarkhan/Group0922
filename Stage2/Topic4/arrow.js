

// function A(){
//   console.log("A called");
// }

// A()


const A = function(){
  console.log("A called");
}


// SIMPLE 1
// const B = () => {
//   console.log("B called");
// }

// SIMPLE 2
// const B = () => {
//   let a = 10;
//   let b = 20;
//   return a + b;
// }

// SIMPLE 3
// function B(num1, num2){
//   return num1 + num2
// }

// const B = (a, b) => a + b;
// // const B = a => a * 100;

// let result = B(12, 34)
// // let result = B(12)

// console.log("result",result);


let numbers = [1,2,3,4,5]

let filterNumbers = numbers.map(function(num){
  return num * 2
})

let filterNumbers3 = numbers.filter(function(num){
  return num % 2 === 0
})


// let filterNumbers2 = numbers.map((num)=>{
//   return num * 2
// })

// let filterNumbers2 = numbers.map((num)=>num * 2)
// let filterNumbers2 = numbers.map(num=>num * 2)
let filterNumbers2 = numbers.filter(num => num % 2 === 0)