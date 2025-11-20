
let isStart = confirm("Do you want to start game?")
let point = 0

console.log("isStart",isStart);

if(isStart){

    //Q1
    var q1 = prompt("2 + 2 = ?") // 4

    // if(parseInt(q1) === 4){
    if(q1 == 4){
        // point = point + 10
        point+=10
        
        alert(`Congratulations!Your point is ${point} `)
        //...

        //Q2
        var q2 = prompt("100 / 3 = ?") // 4

        if(q2 == "33.3" || q2  == "33.33"  || q2  == "33.333" || q2  == "33.3333" ){
            point+=10
            alert(`Congratulations!Your point is ${point} `)

            //....

        }else{
            alert("Incorrect answer!")
        }

    }else{
        alert("Incorrect answer!")
    }


}else{
    console.log("See you again!");
}