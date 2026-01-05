// Elements
const btnShow = document.querySelector("#btnShow")
const title = document.querySelector("#title")
const menuBar = document.querySelector("#menuBar")
const formBtn = document.querySelector("#formBtn")
const inputEl = document.querySelector("#fullname")




// title.parentElement.style.padding = "20px"
// title.parentElement.style.backgroundColor = "lightgray"

const data = []

//Events
btnShow.addEventListener("click",function(){
    console.log("Say hello");
    // title.classList.remove("bg-danger")
    title.innerHTML = "Hello!"

    const isNotShow = menuBar.classList.contains("d-none")

    if(isNotShow){
        menuBar.classList.remove("d-none")
    }else{
        menuBar.classList.add("d-none")
    }

})


function addItem(){

    const listEl = document.querySelector("#listEl")

    const userValue = inputEl.value

    data.push(userValue)

    inputEl.value = ""

    const contentArray = data.map(item => `<li class="text-danger">${item}</li>`).join("")

    listEl.innerHTML = contentArray

}

inputEl.addEventListener("keydown",function(e){

    console.log(e);
    

    if(e.key === "Enter"){
        addItem()
    }

})

formBtn.addEventListener("click",addItem)

// title.addEventListener("click",function(){
title.addEventListener("mouseover",function(){
// title.addEventListener("dblclick",function(){
    console.log("Title clicked");

    const colors = ["red","blue","green","yellow","purple","orange"]
    const randomIndex = Math.floor(Math.random() * colors.length)

    const randomColor = colors[randomIndex]

    title.style.color = randomColor
})

// function sayHello(){
//     console.log("inline click");
// }



// function test(){
//     console.log("Test function");
// }
