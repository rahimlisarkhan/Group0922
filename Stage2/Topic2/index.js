// 1. Verilen cumlede eger cox uzundursa 30 symbol olsa sonuna ... elave et
let sentence = "This is a very long sentence that might need to be truncated for display purposes.";

// let strLength = sentence.length
// let isLong = strLength >= 30

let result = sentence.length >= 30 ? `${sentence.substring(0, 29).trim()}...`  : sentence

// if(sentence.length >= 30){
//     let shortText = sentence.substring(0, 29).trim()
//     result = `${shortText}...`
// }else{
//     result = sentence
// }

console.log(result);

// 2. Verilen sozu terse cevirin Input : tpircsavaj. Output: Javascript

let str = "tpircsavaj"

// Cevirdik Arraya
let strArr = str.split("")

// Tersine cevirib yeniden string etdik
let result2 =  strArr.reverse().join("") // javascript

// hemin stringin ilk herfini tutuduq
let capitalLetter = result2[0]

// ilk herifi boyuk etdik
let capitalUpperLetter = capitalLetter.toUpperCase()

// qalan hisseni tutduq
let subStr = result2.slice(1, result2.length)

let result3 = capitalUpperLetter + subStr
// let result3 = capitalUpperLetter.concat(subStr)

console.log(result3);
