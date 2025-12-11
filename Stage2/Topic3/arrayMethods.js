

// Simple
// function filterArray(arr, el){

//     let newArray = []


//     for(let i = 0 ; i < arr.length; i++){

//         let currentEl = arr[i]

//         if(currentEl != el){
//             newArray.push(currentEl)
//         }

//     }

//     return newArray

// }




//With callback
// function filterArray(arr, cl){

//     let newArray = []

//     for(let i = 0 ; i < arr.length; i++){

//         let currentEl = arr[i]

//         let yourTrueCondition = cl(currentEl) // true

//         if(yourTrueCondition == true){
//             newArray.push(currentEl)
//         }

//     }

//     return newArray

// }


// let numbers = [1, 2, 3, 4, 5, 6, 7]


// function renderElement(element){

//     console.log("renderElement : element",element);

//     if(element !== 5 || element !== 3){
//         return true
//     }else{
//         return false
//     }
    
// }

// function renderElement2(element){

//     console.log("renderElement : element",element);

//     if(element % 2 == 0){
//         return true
//     }else{
//         return false
//     }
    
// }

// function renderElement3(element){

//     console.log("renderElement : element",element);

//     if(element % 5 == 0){
//         return true
//     }else{
//         return false
//     }
    
// }


// let filterResult = filterArray(numbers, renderElement)
// let filterResult2 = filterArray(numbers, renderElement2)
// let filterResult3 = filterArray(numbers, renderElement3)

// console.log("filterResult:", filterResult);
// console.log("filterResult2:", filterResult2);





// let filterResult = filterArray(numbers, 5)

// console.log("filterResult:", filterResult);



function mapArray(arr, cl){

    let newArray = []

    for(let i = 0 ; i < arr.length; i++){

        let currentEl = arr[i]

        let yourNewElement = cl(currentEl) // yeni element qaytarir

        newArray.push(yourNewElement)

    }

    return newArray

}







let numbers = [3, 1, 4, 2, 5, 6, 7]
// let numbers = [5,5,5,5,5,5]



// let newArray1 = mapArray(numbers, function(element){
//     let result = element / 10
//     return result

// })

// // MAP
// let newArray1 = numbers.map(function(element){
//     let result = element * 10
//     return result
// })


// let newArray = []

//  numbers.forEach(function(element){
//     let result = element * 10

//     newArray.push(result)
  
// })

// console.log("newArray",newArray);


// // FILTER
// let newArray2 = numbers.filter(function(element){
//     return element !== 5 
// })


// FIND
// let findNum = students.find(function(element){
//     return element == "JOHN"
// })

// console.log("findNum",findNum);


// REDUCE
// let total = numbers.reduce(function(sum, currentEl){

//     console.log("========");
//     console.log("sum:",sum);
//     console.log("currentEl:",currentEl);
//     console.log("========");

//     return sum + currentEl
// },0)


// numbers.sort(function(ikinciOlan,birinciOlan){

//     console.log("======");
//     console.log("ikinciOlan",ikinciOlan);
//     console.log("birinciOlan",birinciOlan);
//     console.log("======");
    

//     let result = birinciOlan - ikinciOlan // -1 ve +1
    
//     return result
// })


// let result = numbers.every(function(el){
//     return el == 5
// }) // butun elementler 5e beraberdirmi? 

// let result = numbers.some(function(el){
//     return el == 5
// }) // hec olmasa 1  element 5e beraberdirmi? true & false


// console.log("result",result);





// console.log(numbers);




