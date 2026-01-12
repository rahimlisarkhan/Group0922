


// 1. E > F 
// 2. W > E
// 2. F > W

// 1. Oyunun qaydalarina uygun duymelere klik olunmasa ekrana xeta cixacaq+
// 2. Bizim ve komp secimi+
// 3. Secimlerden sonra qalibin mueyyenlesdirilmesi
// 4. Xal sisteminin qurulmasi
// 5. Oyun yeniden baslaya bilmesi ucun reset duymesinin elave edilmesi


const playerPoint1 = document.querySelector("#playerPoint1")
const playerPoint2 = document.querySelector("#playerPoint2")
const playerStatus1 = document.querySelector("#playerStatus1")
const playerStatus2 = document.querySelector("#playerStatus2")

const rules = ["w","e","f"]
let point1 = 0
let point2 = 0


function randomEl(arr){
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}


window.addEventListener("keydown",function(e){

    const userChoose = e.key
    const compChoose = randomEl(rules) //2

    console.log("userChoose",userChoose);
    console.log("compChoose",compChoose);
    
    //1
    if(rules.includes(userChoose) == false){
        alert("Please choose: e w f")
        return
    }

    playerStatus1.classList.remove("text-success","text-danger","text-light")
    playerStatus2.classList.remove("text-success","text-danger","text-light")

    //3
    if(userChoose == "e" && compChoose == "f"){
        point1++

        playerPoint1.innerHTML = `POINT: ${point1}`

        playerStatus1.innerHTML = `WIN`
        playerStatus2.innerHTML = `LOSE`

        playerStatus1.classList.add("text-success")
        playerStatus2.classList.add("text-danger")


        

    }else if(userChoose == "w" && compChoose == "e"){
        point1++

        playerPoint1.innerHTML = `POINT: ${point1}`

        playerStatus1.innerHTML = `WIN`
        playerStatus2.innerHTML = `LOSE`

        playerStatus1.classList.add("text-success")
        playerStatus2.classList.add("text-danger")

    }else if(userChoose == "f" && compChoose == "w"){
        point1++
        playerPoint1.innerHTML = `POINT: ${point1}`

        playerStatus1.innerHTML = `WIN`
        playerStatus2.innerHTML = `LOSE`

        playerStatus1.classList.add("text-success")
        playerStatus2.classList.add("text-danger")


    }else if(userChoose == compChoose){
        console.log("DRAF - DRAF");
        playerStatus1.innerHTML = `DRAF`
        playerStatus2.innerHTML = `DRAF`

        playerStatus1.classList.add("text-light")
        playerStatus2.classList.add("text-light")
    }else{
        point2++
        playerPoint2.innerHTML = `POINT: ${point2}`

        playerStatus1.innerHTML = `LOSE`
        playerStatus2.innerHTML = `WIN`

        playerStatus2.classList.add("text-success")
        playerStatus1.classList.add("text-danger")

        console.log("LOSE!",point1, point2);
    }

})