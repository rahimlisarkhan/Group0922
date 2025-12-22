



// let array = [1, 2, 3]

// let [x, y, c]  = array // Array descructing
// // let [x, y, c] = [1, 2, 3] // Array descructing

// // let x = array[0]
// // let y = array[1]
// // let c = array[2]

// let result = x + y + c


let myObj = {
  name:"John",
  age:34,
  address:"Lorem ipsum"
}

let homeObj = {
  name:"John",
  age:34,
  address:"Lorem ipsum"
}



let {name, age, address, position = "N/A"} = myObj
let {name:homeName, age:homeAge, address:homeAddress} = homeObj

console.log("position",position);
console.log("address",address);
console.log("age",age);
console.log("name",name);

// let name = myObj.name
// let age = myObj.age
// let address = myObj.address