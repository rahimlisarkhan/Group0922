//THIS

// console.log(this);



// const myObj = {
//   fullName: "Alice",
//   age:10,

//   // greet: function() {
//   //   console.log("Hello, " + this.fullName);
//   // }

//   // greet: () => {
//   //   console.log("this",this); // WINDOW OBJECT
//   //   console.log("Hello, " + this.fullName);


//   //   const nestedFunc = () => {      
//   //     console.log("this", this);
//   //   }

//   //   nestedFunc();
//   // }


//   foo: function() {

//     this.age += 1
//     console.log("Age inside foo:", this.age); // 11

//     const localThis = this;

//     const innerFunc = function() {

//       console.log("this", localThis); // WINDOW OBJECT
//       console.log("Hello, " + localThis.fullName);
//     };

//     innerFunc()

//     // const innerFunc = () => {
//     //   console.log("this", this); // myObj
//     //   console.log("Hello, " + this.fullName);

//     //   const nestedFunc = () => {
//     //     console.log("this", this); // myObj
//     //     console.log("Age inside nestedFunc:", this.age); // 11
//     //   }
//     //   nestedFunc(); 
//     // };

//     // innerFunc();
//   }

// };

// // myObj.greet(); // Output: Hello, Alice

// myObj.greet();





const personal = {
  name:"John",
  surname:"Doe",
  balance:0,
  history:"TEST",
}

// console.log(personal.name);
// console.log(personal["surname"]);


// for(let key in personal){
//   // console.log(key); // name, surname, balance, history
//   console.log(personal[key]); // John, Doe, 0, TEST
// }

// const response = [['name', 'John'], ['surname', 'Doe'], ['balance', 0], ['history', 'TEST']]

// const data = Object.values(personal) // [ 'John', 'Doe', 0, 'TEST' ]


// for(let i = 0; i < data.length; i++){
//   console.log(data[i]);
// }

// const data = Object.keys(personal) // [ 'name', 'surname', 'balance', 'history' ]
// const data = Object.entries(personal) //[ [ 'name', 'John' ], [ 'surname', 'Doe' ], [ 'balance', 0 ], [ 'history', 'TEST' ] ]

// for(let i = 0; i < data.length; i++){

//   let simpleArray = data[i] // [ 'name', 'John' ]

//   const key = simpleArray[0]
//   const value = simpleArray[1]

//   console.log(`${key}: ${value}`);
// }

// console.log(data);


// let personal2 = {
//   name:"John",
//   surname:"Doe",
//   age:30,
//   tutor_exs:5,
//   work_exs:8,
//   city:"New York",
//   country:"USA"
// }


// Object.freeze(personal2) // object-i dondurur, deyismeye imkan vermir

// personal2.age = 31

// console.log(personal2);



// let personal3 = {
//   name:"Jane",
//   surname:"Smith",
//   age:28,
//   tutor_exs:3,
//   work_exs:6,
// }


// let newObject = {...personal2, ...personal3} // spread operatoru ile object birlesdirmek

// Object.assign(personal2, personal3)

// console.log(personal2);



// let numbers= [1,2,2,2,3,4,5]
// let numbers2= [6,7,8,9,2,2,2,10]

// // let combined = [...numbers, ...numbers2] // [1,2,3,4,5,6,7,8,9,10]
// let combined = numbers.concat(numbers2) // [1,2,3,4,5,6,7,8,9,10]

// console.log(combined);


// console.log(combined); // [1,2,3,4,5,6,7,8,9,10]

// let myObj1  = {
//   fullname:"Hokume Kasumova",
//   age:23
// }

// let myObj2  = {
//   fullname:"Kamran Mammadov",
// }

// let combinedObj = {...myObj1, ...myObj2} // {fullname: "Kamran Mammadov", age: 23}
// let combinedObj = Object.assign(myObj1, myObj2) // {fullname: "Kamran Mammadov", age: 23}

// console.log(combinedObj);



let myObj = {
  full_name:"John Doe",

    // SUAL 4
   sayHello:function(){
    console.log(this.full_name); //

    let thisData = this

    // SUAL 5
    // function A(){
    //  console.log(thisData.full_name); // 
    // }

      // const A = () =>{
      //  console.log(thisData.full_name); // 
      // }

    // SUAL 6
      const A = () =>{
       console.log(this.full_name); // 
      }

    A()

  }

  // SUAL 3
  //   sayHello:function(){
  //   console.log(this.full_name); //
  // }

  // SUAL 1
  // sayHello:() => {
  //   console.log(this.full_name); //
  // }

  // SUAL 2
  //   sayHello:() => {
  //   console.log(this.full_name); // WINDOW

  //     const innerFn = function(){
  //         console.log(this.full_name); //
  //     }

  //     innerFn()
  // }
}


myObj.sayHello()


// SUAL 4

// SUAL 3


// SUAL 2
// 1. Xeyyam: Window
// 2. Aytac: Window
// 3. Vaqif: JOHN
// 4. Hokume: JOHN
// 5. Inqilab: Window


// SUAL 1
// 1. Nurlan : Ad gorunecek
// 2. Asef : Window
// 3. Xeyyam : Window
// 4. Aytac : Window
// 5. Babek: Window
// 6. Inqilab: Window


