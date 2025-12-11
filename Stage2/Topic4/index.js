

//      GLOBAL | LOCAL | BLOCK SCOPE | Assignment
// var   YES      YES        NO             YES
// let    NO      YES        YES            YES        
// const  NO      YES        YES             NO    


// Assignment
// let a = 10

// a = 20

// const a = 3.14

// a = 20
// console.log("a",a);

// const numbers = [1,2,3,4,5]

// numbers.push(6)

// console.log("numbers",numbers);



//GLOBAL SCOPE
// var a = 10

// let a1 = 20

// const a2 = 30


// function a3(){
//     console.log("a3!!");
    
// } 

// const a3 = function(num1){
//     console.log("a3!!",num1);
// } 

// a3(14)

// console.log("window",window);



// function A(){
//     var a = 10

//     let a1 = 20

//     const a2 = 30

//     console.log("Inside A - var",a);
//     console.log("Inside A - let",a1);
//     console.log("Inside A - const",a2);

//      return [a, a1, a2]
// }

// const result1 = A()

// console.log("Result1",result1[0]);

// function B(){
//     var a = 10

//     let a1 = 20

//     const a2 = 30

//     console.log("Inside B - var",a);
//     console.log("Inside B - let",a1);
//     console.log("Inside B - const",a2);
// }

// B()


// console.log("OUTSIDE A - var",a);
// console.log("OUTSIDE A - let",a1);
// console.log("OUTSIDE A - const",a2);

// BLOCK SCOPE
// if(true){
//     var a = 10

//     let a1 = 20

//     const a2 = 30

//     console.log("Inside Block - var",a);
//     console.log("Inside Block - let",a1);
//     console.log("Inside Block - const",a2);
// }

// console.log("OUTSIDE Block - var",a);
// console.log("OUTSIDE Block - let",a1);
// console.log("OUTSIDE Block - const",a2);

// EXCERCISE 1


function foo() {
  console.log("Foo!");

  function bar() {
    console.log("Bar!");
    return 2000;
  }


  const result = bar();

  return result;

}

let netice = foo(); 


console.log("netice",netice);


// netice[1]
// netice()





// function A(){
//     console.log("A called");
    
// }

// // A()

// A

