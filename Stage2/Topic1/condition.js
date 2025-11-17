// Condition Statements: if, else, else if


// var age = 20

// // var result = age >= 20 // true, false

// if(age >= 18){ // debuging
//     console.log("Hello");
// }else if(age >=14 && age <= 17 ){
//     console.log("Polis bomesi");
// }else if(age >=10 && age <= 13 ){
//     console.log("Say hello usaqlar evi");
// }else{
//     console.log("Hi");
// }

// if(age == 18){
//     console.log("bla bla");
// }


var isStart = confirm("Start?") // boolean

if(isStart){

    var userAnswer = prompt("Your answer!") // 90

    if(userAnswer <= 100 && userAnswer >= 90){
        alert("A");
    } else if(userAnswer <=89 && userAnswer >= 80){
        alert("B");
    } else if(userAnswer <=79 && userAnswer >= 70){
        alert("C");
    } else if(userAnswer <=69 && userAnswer >= 60){
        alert("D");
    } else if(userAnswer <=59 && userAnswer >= 50){
        alert("F");
    }else{
        alert("Please enter your correct answer!")
    }

}else{
    alert("See you again!")
}
