

//INTRO
// let a = 10
// let b = 12
// let c = 13

// let numbers = [10, 12, 13] // index

// let students = ["John","Marry"]
// // let booleans = [true,false,false,true,null,undefined]

// let result = numbers[2] // 13

// let result2 = students[0]

// console.log(result);
// console.log(result2);


// Heap and Stack memories


// STACK
// let a = 15

// let b = a //COPY

// a = 12


// console.log("a:",a); // 12
// console.log("b:",b); // 15


// HEAP
let numbers1 = [2,4,6,8]
let numbers2 = numbers1


numbers1[3] = 100
// numbers1[0] = 102
numbers2[1] = 1001

console.log("numbers1:", numbers1);
console.log("numbers2:", numbers2);

