//Callback function

// function catchMinNumber(numbers){

//     let  prevNum = numbers[0]; // sebetimize ilk elementi elave edirik

//     for (let i = 1; i < numbers.length; i++){

//         let currentNum = numbers[i];

//         if(currentNum < prevNum){
//             prevNum = currentNum;
//         }

//     }

//     return prevNum;
// }


// function calcProcess(num, arr){
//     let minNumber = catchMinNumber(arr);

//     let result = num * minNumber;

//     console.log("Result is:", result);
// }


// let list = [15, 3, 9, 27, 1, 8, 12];

// calcProcess(10, list);


// function A(){
//     const pi = 3.14;

//     return pi;
// }

// // A()


// function calc(num){
//     let resultA = A(); // 3.14

//     console.log("Result last is:", resultA * num);


// }

// calc(10)





// let getCalc = function(){
//     console.log("Function A is called");
// }

// getCalc = 10

// console.log(getCalc);


// function A(){
//     console.log("Function A is called");

// }

// console.log(A()); // undefined


// function B(){
//     console.log("Function B is called");

//     // return "Hooray!"
// }


// console.log(B);// [Function: B]


// function C(mes){
//     console.log("Function C is called: ",mes);
// }


// function D(mes){
//     console.log("Function D is called: ",mes);
// }


// function greetUser(name, cl){

//     let message = `Hello, ${name}! Welcome to the platform.`;
//     // console.log("callback",cl);
    
//     cl(message) // Function C


// } 


// greetUser("Alice", C);
// greetUser("Khayyam", D);





function performOperation(num1, num2, operationCallback){

    let a = 10;
    let result = operationCallback(num1, num2, a);

    console.log("Result of the operation is:", result);
}

function addBabek(a, b, c){
    return a + b + c;
}

function subtractBabek(a, b, c){
    return a - b - c;
}

function multiplyBabek(a, b, c){
    return a * b * c;
}

function divideBabek(a, b, c){
    return a / b / c;
}

performOperation(10, 5, addBabek); // 15
performOperation(10, 5, subtractBabek); // 5
performOperation(10, 5, multiplyBabek); // 50
performOperation(10, 5, divideBabek); // 2