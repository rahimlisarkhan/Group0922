"use strict"

const movileList = document.querySelector(".movileList");
const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");
const loadingIndicator = document.querySelector(".loading");


// DRY - Don't Repeat Yourself
searchButton.addEventListener("click", function(){
    getMovies()
})

searchInput.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        getMovies()
    }
})

async function getMovies(){

    try{

       const url = `http://www.omdbapi.com/?apikey=5addd3ac&s=${searchInput.value}`
    
       loadingIndicator.style.display = "block";
       
       const response = await fetch(url) // A



       const data = await response.json()

        renderMovies(data.Search); //B

        searchInput.value = ""

    }catch(err){
        console.log("Promise rejected:", err);
    }finally{
            loadingIndicator.style.display = "none";
    }
}

// function getMovies(){
//        const url = `http://www.omdbapi.com/?apikey=5addd3ac&s=${searchInput.value}`
    
//        loadingIndicator.style.display = "block";
       
//        const promise = fetch(url) // A
    
//             promise.then((response) => {
//                 return response.json();
//             }).then((data) => {
//                 renderMovies(data.Search); //B
//             }).catch((err) => {
//                 console.log("Promise rejected:", err);
//             }).finally(() => {
//                 console.log("Promise finally");
//                 loadingIndicator.style.display = "none";
//         })

//      searchInput.value = ""
// }

function renderMovies(movieData) {


    console.log("movieData",movieData);

    if(!movieData || movieData.length === 0) {
        movileList.innerHTML = "<h2>No movies found</h2>";
        return;
    }


    const content = movieData.map((movie) => {
        return `
         <div class="movieContent">
            <img id="moviePoster" src="${movie.Poster}" alt="${movie.Title} Poster" />
           
            <div class="movieInfo">
                <h2>Movie Details</h2>
                <p id="movieTitle">${movie.Title}</p>
                <p id="movieDescription">${movie.Year}</p>
            </div>
         </div>
        `;
    }).join("");

    movileList.innerHTML = content;


}




// const age =  18

// const result = `John is ${age}` 


// try{
//     const a = 10;

//     a = 20

//     console.log(a);
// }catch(error){
//     console.log(error);
//     alert(error)
// }





// let b = 15;

// console.log(b);



// async function getBlogs(){

//     try{

//         const result = await A(2,3)

//         B(result)

//     }catch(error){
//         console.log(error);
//     }finally{
//         console.log("Finally block");
//     }

// }


// const promise = navigator.getBattery()

// promise.then((battery)=>{
//     console.log("Battery data:",battery);
// }).catch((err)=>{
//     console.log("Error fetching battery data:",err);
// })


 async function batteryLevel(){
    try{
        const battery = await navigator.getBattery()

        console.log("Battery data:",battery);
    }catch(err){
        document.querySelector(".toast-body").innerText = err
    }
}

// batteryLevel()