



// HEAP
// 1. Spread Operator
let numbers = [1,2,3,4,5]
let numbers2 = [12,34,56,78,90]


// let arr = numbers.concat(numbers2)


// let newNumbers = [...numbers]
// // let newNumbers = numbers

// newNumbers.push(100)


// let arr = [...numbers2, ...numbers, "John", "Doe"]

// console.log("arr",arr);

// 2. Rest Operator
// function sum(...arr){

//     let total = 0
//     for(let i=0; i<arr.length; i++){
//         total += arr[i]
//     }

//     return total
// }


// function calc(operator, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10){
function calc(operator, name, ...numbersArr){

  // let arr = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10]

  console.log("name",name);

    let total = 1
    for(let i = 0; i<numbersArr.length; i++){

        if(operator === "ADD"){
            total += numbersArr[i]
        } else if(operator === "SUBTRACT"){
            total -= numbersArr[i]
        } else if(operator === "MULTIPLY"){
            total *= numbersArr[i]
        } else if(operator === "DIVIDE"){
            total /= numbersArr[i]
        }
    }

    return total
}




// let result = sum(1,2,3,4,5,6,7,8,9,10,12,34,56,78,90)
let result = calc("MULTIPLY","Malik", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log("result",result);