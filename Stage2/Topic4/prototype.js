

// alert("Welcome to Stage 2, Topic 4!");


// console.log(window);


Object.prototype.hello = function(){
  console.log("Hello from Object Prototype",this);
}

Array.prototype.findBigInt = function(){

  let prevNum = 0

  for(let i = 0; i < this.length; i++){
    if(this[i] > prevNum){
      prevNum = this[i]
    }
  }

  return prevNum

}

String.prototype.fullName = function(){
  return this + " Doe"
}

let fullname = null
let numbers = [10, 20, 30, 40,105, 50, 60, 70, 80, 90, 100]


// numbers.hello()

const result = numbers.findBigInt()

console.log("numbers",numbers);
console.log("result",result);

let myObj = {
  name:"John",
  age:34,
  address:"Lorem ipsum"
}
// myObj.hello()

console.log(myObj);


// const isArrayData = Array.isArray(numbers)

// console.log(isArrayData);



// console.log(typeof numbers );


// numbers.filter()