// Elements
const btnShow = document.querySelector("#btnShow")
const title = document.querySelector("#title")
const menuBar = document.querySelector("#menuBar")
const formBtn = document.querySelector("#formBtn")

const userData = []

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

formBtn.addEventListener("click",function(){

    const inputEl = document.querySelector("#fullname")
    const listEl = document.querySelector("#listEl")

    const userValue = inputEl.value

    userData.push(userValue)

    

    const content = userData.map(item => `<li class="text-danger">${item}</li>`)

    console.log("content",content);

    listEl.innerHTML = content.join("")

    // listEl.innerHTML = `<li class="text-danger">Test1</li> <li class="text-danger">Test2</li> <li class="text-danger">Test3</li>`

})


// function sayHello(){
//     console.log("inline click");
// }