

console.log(window.navigator);


// SCREEN 
// window.screen.orientation.lock("portrait-primary").then(function(){
//     console.log("Orientation locked to portrait-primary");
// }).catch(function(error){
//     console.log("Error locking orientation:", error);
// });


// screen.orientation.addEventListener("change",function(){
//     console.log("Orientation changed to:", screen.orientation.type);

//     if(screen.orientation.type.startsWith("portrait")){
//         console.log("Portrait mode");
//     } else if(screen.orientation.type.startsWith("landscape")){
//         console.log("Landscape mode");
        
//     }
// });

// window.alert("Hello from JS file!")


// if(window.innerWidth < 600){
//     console.log("Mobile device");
// } else {
//     console.log("Desktop device");
// }

// LOCATION
// console.log("Current URL:", window.location.href);
// console.log("Hostname:", window.location.hostname);
// console.log("Pathname:", window.location.pathname);
// console.log("Protocol:", window.location.protocol);

// if(window.location.pathname.includes("index.html")){
//     console.log("You are on the Intro page");
//     document.querySelector("#searchInput").classList.remove("d-none")

// } else {
//     console.log("You are on a different page");
//     document.querySelector("#searchInput").classList.add("d-none")
// }


const btnEl = document.querySelector("#reloadBtn")

// reloadBtn.addEventListener("click",function(){
//     // Reload the current page
//     // window.location.reload()
//     // window.location.href = "https://www.example.com"
// })


//HISTORY
// console.log("History length:", window.history.length);

// const backBtn = document.querySelector("#backBtn")
// const forwardBtn = document.querySelector("#forwardBtn")

// btnEl.addEventListener("click",function(){
//     window.history.back()
// })

// forwardBtn.addEventListener("click",function(){
//     window.history.forward()
// })


//NAVIGATOR


// const result = window.navigator.onLine ? "Online" : "Offline"

// console.log("Browser  internet:", result);


// const batteryContentEl = document.querySelector("#batteryContent")
// const progessLineEl = document.querySelector("#progessLine")
// const batteryPromise = navigator.getBattery() // Promise


// batteryPromise.then((data)=>{

//     const batteryLevel = Math.floor(data.level * 100)

//     progessLineEl.style.width = `${batteryLevel}%`

//     if(data.charging){
//         progessLineEl.classList.add("progress-bar-striped")
//     }else{
//         progessLineEl.classList.remove("progress-bar-striped")
//     }

//     batteryContentEl.innerHTML = `
//         <p>Battery Level: ${batteryLevel}%</p>
//         <p>Charging: ${data.charging ? "Yes" : "No"}</p>
//     `
//     console.log("Battery data fetched",data);
    
// })

// navigator.geolocation.getCurrentPosition((data)=>{
//     console.log("Geolocation permission granted",data);
// })


// window.addEventListener("online",function(){
//     console.log("You are back online");
// })


// window.addEventListener("offline",function(){
//     console.log("You are now offline");
// })



// window.addEventListener("scroll",function(e){
//     const scrollTop = window.scrollY

//     console.log("scrollTop",scrollTop);
    
//     // console.log("Scroll Top:",e);

//     // const headerEl = document.querySelector("#headerEl")

//     // if(scrollTop > 50){
//     //     headerEl.classList.add("bg-dark","text-white","py-3","shadow-lg")
//     // } else {
//     //     headerEl.classList.remove("bg-dark","text-white","py-3","shadow-lg")
//     // }

// })


// window.addEventListener("keydown",function(e){
//     console.log("e key",e.key);
//     console.log("e code",e.code);

// })