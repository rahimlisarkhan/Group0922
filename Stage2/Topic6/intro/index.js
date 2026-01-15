

// // Timeout fn

// const btn = document.getElementById("btn");

// let timer

// btn.addEventListener("click", function(){

//     console.log("timer",timer);

//     clearInterval(timer); // cleanups

//     timer = setInterval(function (){
//           console.log("Hello from Timeout");
//        }, 1000)
// })


// //debounce fn

// function debounce(fn, delay){
//     let timer;

//     return function(){

//         clearTimeout(timer);
//         timer = setTimeout(function(){
//             fn()
//         }, delay)
//     }
// }


// const searchInput = document.getElementById("searchInput");

// const debouncedFunction = debounce(function(){
//     console.log("Searching for ", searchInput.value);
// }, 500)

// searchInput.addEventListener("input", debouncedFunction)


// // console.log("b", b);


// // const a = 10;
// // const b = 20;


// // function B(){
// //     console.log("Inside B fn");
// // }

// // console.log("Sum is: ", a + b); // 1

// // B() // 







// JS is single threaded
// Call Stack
// Synchronous vs Asynchronous
// Blocking vs Non-Blocking
// Web APIs

//Event Loop
// ORDER OF EXECUTION
// CALLBACK QUEUE
// MICRO-TASK QUEUE
// MACRO-TASK QUEUE


// console.log("Start");

// setTimeout(function(){
//     console.log("Timeout 1");
// }, 0) // Macro-task

// Promise.resolve().then(function(){
//     console.log("Promise 1");
// }) // Micro-task

// console.log("End");


// Start
// End
// "Promise 1"
// Timeout 1





