// function A(){
//     console.log("A");

// }

// function B(cl,cl2){
//     console.log("B");
//     //...

//     // logic A result needed here

//     const result = cl();

//     console.log("After A is called inside B",result);

//     cl2();

// }

// function C(){
//     console.log("C");
// }

// B(A,C)

// ============= CALLBACK HELL =============
// This demonstrates why Promises were invented

// function getUser(userId, callback) {
//     setTimeout(() => {
//         console.log("1. Got user");
//         callback({ userId: userId, name: "John" });
//     }, 1000);
// }

// function getOrders(user, callback) {
//     setTimeout(() => {
//         console.log("2. Got orders for", user.name);
//         callback(["Order1", "Order2", "Order3"]);
//     }, 1000);
// }

// function getOrderDetails(order, callback) {
//     setTimeout(() => {
//         console.log("3. Got details for", order);
//         callback({ order: order, total: 100 });
//     }, 1000);
// }

// function getShippingStatus(orderDetails, callback) {
//     setTimeout(() => {
//         console.log("4. Got shipping status for", orderDetails.order);
//         callback("Shipped");
//     }, 1000);
// }

// // 😱 CALLBACK HELL - The Pyramid of Doom
// getUser(1, (user) => {
//     getOrders(user, (orders) => {
//         getOrderDetails(orders[0], (details) => {
//             getShippingStatus(details, (status) => {
//                 console.log("Final status:", status);
//                 // Imagine more nested callbacks here...
//                 // This becomes unreadable and hard to maintain!
//             });
//         });
//     });
// });


// ============= PROMISES =============

// PROMISE STATUSES:
// PENDING: initial state, neither fulfilled nor rejected.
// FULFILLED: meaning that the operation completed successfully.
// REJECTED: meaning that the operation failed.

// function B(){
//     console.log("B");
// }


//  throw Error("Some error occurred");


function renderElements(data){
    console.log("C",data);

    for(let user of data){
        const div = document.createElement("div");
        div.innerText = `User: ${user.name} (ID: ${user.id})`;
        document.body.appendChild(div);
    }
}

function showError(err){
    console.log("Error occurred:",err);
}

// function A() {

//   const promiseObj = new Promise((res, rej)=>{

//      const data = [
//                 { userId: 1, name: "John" },
//                 { userId: 2, name: "Jane" },
//                 { userId: 3, name: "Doe" }

//         ]

//         setTimeout(() => {
//              if(data.length > 0){
//                 res(data);
//             }else{
//                 rej("No users found");
//             }
//         }, 2000);

//   });

// return promiseObj;
// }


// const userPromise = A();


const userPromise = fetch("https://jsonplaceholder.typicode.com/users"); //return a promise

const loadingContent = document.querySelector("#loadingContent");

console.log("userPromise",userPromise);


loadingContent.style.display = "block";
userPromise.then((response) => {

    console.log(response);

    const secondPromise = response.json(); // return another promise

    
    return secondPromise; // Parse JSON data // second promise

}).then((data) => {
    console.log("Users data:", data);
    renderElements(data);
    // loading = false;

}).catch((err) => {
    console.log("Promise rejected:", err);
    // showError("Unable to fetch users");
    alert("Unable to fetch users");
}).finally(() => {
    console.log("Promise finally");
    loadingContent.style.display = "none";

})




// class MyPromise {
//     constructor(executor) {
//         this.status = 'PENDING';
//         this.value = null;
//         this.reason = null;

//         const resolve = (value) => {
//             if (this.status === 'PENDING') {
//                 this.status = 'FULFILLED';
//                 this.value = value;
//             }
//         };

//         const reject = (reason) => {
//             if (this.status === 'PENDING') {
//                 this.status = 'REJECTED';
//                 this.reason = reason;
//             }
//         };

//         executor(resolve, reject);
//     }

//     then(onFulfilled, onRejected) {
//         if (this.status === 'FULFILLED') {
//             onFulfilled(this.value);
//         } else if (this.status === 'REJECTED') {
//             onRejected(this.reason);
//         }
//     }
// }

