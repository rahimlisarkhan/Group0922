// Exercise 1: Print even numbers from 1 to 100+
// Exercise 2: From a list of names, print names starting with A +
// Exercise 3: From a list of numbers, create a new list with numbers greater than 50
// Exercise 4: From a list of words, print words which have length more than 5
// Exercise 5: From a list of cities, skip the city "Lahore" and print all other cities


// Exercise 3
// let array = []

// for (let count = 0; count < 100; count++){
    
//     if(50 < count){
//         array.push(count);
//     }
    
// }


// console.log("array",array);

// Exercise 4
let words = ["hello","world","JavaScript","is","awesome","programming","fun","code"];

let newWords = [];

for (let i = 0; i < words.length; i++){

    let el = words[i]; //

    if(el.length > 5){
        newWords.push(el);
    }

}

console.log("newWords", newWords);