// Mouse events

// 1. Click event

// 2. Double click event

// 3. Mouse over event

// 4. Mouse out event

// Keyboard events

// 1. Key down event

// 2. Key up event

// 3. Key press event

// Focus events
// 1. Focus & Blur & Change event
// const inputEl = document.querySelector("#inputEl")

// inputEl.addEventListener("focus",function(){

//     console.log("Input focused");

//     inputEl.nextElementSibling.classList.remove("d-none");
// })

// inputEl.addEventListener("blur",function(){
//     console.log("Input blurred");

//     inputEl.nextElementSibling.classList.add("d-none");
// })


// inputEl.addEventListener("input",function(e){
//     console.log("Input changed:",e);

//     inputEl.nextElementSibling.nextElementSibling.innerHTML = `You typed: ${inputEl.value.length} characters`
//     inputEl.nextElementSibling.nextElementSibling.style.color = inputEl.value.length > 15 ? "green" : "red"

// })


// inputEl.addEventListener("focus",function(){

//     console.log("Input focused");

//     inputEl.nextElementSibling.classList.remove("d-none");
// })

// inputEl.addEventListener("blur",function(){
//     console.log("Input blurred");

//     inputEl.nextElementSibling.classList.add("d-none");
// })



// Keyboard events
// inputEl.addEventListener("keyup",function(e){
// inputEl.addEventListener("keydown",function(e){
// inputEl.addEventListener("keypress",function(e){
//     const isEnter = e.key === "Enter"

//     console.log("e",e);
    
//     if(isEnter){
//         console.log("Form submitted");
//     }

// })



// window.addEventListener("keypress",function(e){
//     console.log(e);
// })

const boxEl = document.querySelector("#boxEl")
const changeEl = document.querySelector("#changeEl")

boxEl.addEventListener("mousemove",function(e){
    // boxEl.innerHTML = `X: ${e.offsetX} Y: ${e.offsetY}`

    changeEl.classList.remove("d-none")

})

boxEl.addEventListener("mouseout",function(e){

    changeEl.classList.add("d-none")
})

