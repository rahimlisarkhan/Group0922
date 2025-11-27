// //STACK
// let a = 5;

// let b = a

// a = 25

// console.log("a",a);
// console.log("b",b);

// //HEAP
// let fruits = ["Apple","Banana","Mango"];

// let moreFruits = fruits;

// fruits.push("Orange");

// console.log("fruits",fruits);
// console.log("moreFruits",moreFruits);

// let array = []

// LOOPS
// for(let count = 0; count < 100; count++){

//     if(count % 5 === 0){
//         array.push(count);
//     }

// }


// n2
// for(let count = 0; count < 10; count++){

//     for(let innerCount = 0; innerCount < 10; innerCount++){

//         console.log("count",count);
//         console.log("innerCount",innerCount);

//     }
  

// }



// let fruits = ["Apple","Banana","Mango","Orange","Pineapple","Grapes","Strawberry","Watermelon"];
// let newFruits = [];


// for(let i = 0; i < fruits.length; i++){

//     let el = fruits[i];


//     // if(el.startsWith("a") || el.startsWith("A")){
//     // if(el.toLowerCase().startsWith("a")){
//     if(el.toLowerCase()[0] === "a"){
//         console.log("You have",el);
//         newFruits.push(el);
//     }
// }

// console.log("newFruits",newFruits);


// for(let i = 0; i < fruits.length; i++){

//     let el = fruits[i];

//     // for breaking the loop 
//     // if(el == "Mango"){
//     //     break
//     // }

//     // for skipping the current iteration
//     if(el == "Mango" || el == "Orange"){
//         continue
//     }

//     console.log("You have",el);

//     // your logic here

// }


// let students = ["John","Alice","Bob","Diana","Charlie","Eva"];

// let i = 0;

// for(let element of students){
//     console.log("Student Name:",element);
// }

// for(let index in students){
//     let el = students[index]
//     console.log("Student Name:",el);
// }


// while(i < students.length){

//     let student = students[i];

//     console.log("Student Name:",student);

//     i++
// }

// do{

//     let student = students[i];

//     console.log("Student Name:",student);

//     i++

// }
// while(i < students.length)


