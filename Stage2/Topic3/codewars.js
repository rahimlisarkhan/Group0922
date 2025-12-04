//CODEWARS


// //SOLITION 1
//     Test.assertEquals(countWords(" Arthur "), 1);
//     Test.assertEquals(countWords(" David"), 1);
//     Test.assertEquals(countWords("Nelson "), 1);
//     Test.assertEquals(countWords("  Hello Gomer  "), 2);
//     Test.assertEquals(countWords("  Hello     Bart  "), 2);



// function countWords(str) {

//     let newStr = str.trim();

//     let arr = newStr.split(/\s+/);

//     console.log(arr);
    

//     // let count = arr.length
//     let count = 0

//     for (let i = 0; i < arr.length; i++){

//         if(arr[i] !== ""){
//             count++;
//         }

//     }

//     return count;
  
// }


// // countWords("  Hello     Bart  ")
// // countWords(" Arthur ")
// // countWords(" David")
// // countWords("Nelson ")
// // countWords("  Hello Gomer  ")
// countWords("﻿Hello﻿World ")



// //SOLITION 1
    // assert.strictEqual(solution('world'), 'dlrow');
    // assert.strictEqual(solution('hello'), 'olleh');
    // assert.strictEqual(solution(''), '');
    // assert.strictEqual(solution('h'), 'h');


//     function solution(str){
//         let result = str.split("") // convert string to array
//         let result2 = result.reverse() // reverse array
//         let result3 = result2.join("") // convert array to string

//         console.log("result3",result3);
        

//         return result3;
// }


// solution('world')
// solution("hello")
// solution('')
// solution('h')


// //SOLITION 3
//   assert.strictEqual(howMuchILoveYou(7),"I love you")
//   assert.strictEqual(howMuchILoveYou(3),"a lot")
//   assert.strictEqual(howMuchILoveYou(6),"not at all")

    // function howMuchILoveYou(nbPetals) { 
    //     let phrases = [
    //         "I love you",
    //         "a little",
    //         "a lot",
    //         "passionately",
    //         "madly",
    //         "not at all"
    //     ];

    //     let index = (nbPetals - 1) % phrases.length;

    //     console.log("index", phrases[index]);

    //     return phrases[index];
    // }


    // howMuchILoveYou(7)


// SOLITION 4

    // (uefaEuro2016(['Germany', 'Ukraine'], [2, 0]), "At match Germany - Ukraine, Germany won!");
    // assert.strictEqual(uefaEuro2016(['Belgium', 'Italy'], [0, 2]), "At match Belgium - Italy, Italy won!");
    // assert.strictEqual(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]), "At match Portugal - Iceland, teams played draw.");

// function uefaEuro2016(teams, scores){
//     let team1 = teams[0];
//     let team2 = teams[1];

//     let score1 = scores[0];
//     let score2 = scores[1];


//     if(score1 > score2){
//         return `At match ${team1} - ${team2}, ${team1} won!`;
//     } else if (score2 > score1){
//         return `At match ${team1} - ${team2}, ${team2} won!`;
//     } else {
//         return `At match ${team1} - ${team2}, teams played draw.`;
//     }

// }

// uefaEuro2016(['Germany', 'Ukraine'], [2, 0])