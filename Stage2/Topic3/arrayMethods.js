

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
function filterArray(arr, cl){

    let newArray = []

    for(let i = 0 ; i < arr.length; i++){

        let currentEl = arr[i]

        let yourTrueCondition = cl(currentEl) // true

        if(yourTrueCondition){
            newArray.push(currentEl)
        }

    }

    return newArray

}


let numbers = [1, 2, 3, 4, 5, 6, 7]


function renderElement(element){

    console.log("renderElement : element",element);

    if(element !== 5 || element !== 3){
        return true
    }else{
        return false
    }
    
}

function renderElement2(element){

    console.log("renderElement : element",element);

    if(element % 2 == 0){
        return true
    }else{
        return false
    }
    
}

function renderElement3(element){

    console.log("renderElement : element",element);

    if(element % 5 == 0){
        return true
    }else{
        return false
    }
    
}


let filterResult = filterArray(numbers, renderElement)
let filterResult2 = filterArray(numbers, renderElement2)
let filterResult3 = filterArray(numbers, renderElement3)

console.log("filterResult:", filterResult);
console.log("filterResult2:", filterResult2);





// let filterResult = filterArray(numbers, 5)

// console.log("filterResult:", filterResult);
