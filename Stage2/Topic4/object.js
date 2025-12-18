//OBJECT


// console.log(Math);


// const PI = 14

// function sum(a,b){
//   let a = 12
//   let b = 20

//   return a + b
// }

// function round(n){
//   return n
// }


// const programingInstructor = {
//   name:"Sarkhan",
//   surname:"Rahimli",
//   age:30,
//   tutor_exs:5,
//   work_exs:8,

//   talkLessons:function(){
//     console.log("Lessons...");
//   },

//   prepareServerApp:function(yourAppName){
//     console.log("Prepare...",yourAppName);
    
//   }


// }



// console.log(this);


// const hibridCar = {
//   name:"",
//   brand:"",
//   is_new:false,
//   speed:0,
//   year:null,
//   is_fuel:false,

//   fill:function(carName,carBrand,carYear){
//     this.name = carName
//     this.brand = carBrand
//     this.year = carYear

//     return {...this}
//   },

//   start:function(){

//     let randomNum = Math.random() * 100

//     this.speed += randomNum

//     this.monitoring()

//     return randomNum

//   },

//   stop:function(){
//     console.log("STOP",this.speed);
    
//   },

//   monitoring:function(){
//     console.log("====================");
//     console.log(this.name);
//     console.log(this.speed);
//     console.log("====================");
    
//   },

//   fuelling:function(){
//     this.is_fuel = true
//     console.log("Fuellling...");
//   }

// } 


// const teslaCar  = hibridCar.fill("Tesla","094",2021)
// const changanCar  = hibridCar.fill("Changan","Q07",2023)


// teslaCar.start()
// teslaCar.start()
// teslaCar.start()

// changanCar.start()
// changanCar.start()
// changanCar.start()

// console.log("teslaCar",teslaCar);
// console.log("changanCar",changanCar);
