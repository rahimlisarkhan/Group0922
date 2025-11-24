//1. NaN & isNaN()

// let a  = 23
// let b = 12

// if(a !== undefined){
//     let result = a - b // NaN - Not a Number
//     console.log(result);
// }

// let a = "Hello"
// let b = 12

// let result1 = isNaN(a) // true
// let result2 = isNaN(b) // false
// console.log(result2);


//2. Ternary Operator - ?

// let age = 14

// // let str = "John"

// // if(age >=18){
// //    str = `Mr.${str}`
// // }else{
// //     str = `Hey ${str}`
// // }

// let personalName = "John"
// let str = age >= 18 ? `Mr.${personalName}` : `Hey ${personalName}`

// console.log(str);


//3. Switch Case

let day = 3
let dayName = ""


// if(day === 1){
//     dayName = "Monday"
// }else if(day === 2){
//     dayName = "Tuesday"
// }else if(day === 3){
//     dayName = "Wednesday"
// }else if(day === 4){
//     dayName = "Thursday"
// }else if(day === 5){
//     dayName = "Friday"
// }else if(day === 6){
//     dayName = "Saturday"
// }else if(day === 7){
//     dayName = "Sunday"
// }else{
//     dayName = "Invalid Day"
// }


switch(day){
    case 1:
        dayName = "Monday"
        break
    case 2:
        dayName = "Tuesday"
        break
    case 3:
        dayName = "Wednesday"
        break
    case 4:
        dayName = "Thursday"
        break
    case 5:
        dayName = "Friday"
        break
    case 6:
        dayName = "Saturday"
        break
    case 7:
        dayName = "Sunday"
        break
    default:
        dayName = "Invalid Day"
}

console.log(dayName);