const movileList = document.querySelector(".movileList");
const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");

searchButton.addEventListener("click", getMovies)

searchInput.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        getMovies()
    }
})

function getMovies(){
       const url = `http://www.omdbapi.com/?apikey=5addd3ac&s=${searchInput.value}`
       
       const promise = fetch(url)

            promise.then((response) => {
                return response.json();
            }).then((data) => {
                renderMovies(data.Search);
                
                // console.log("Movie data:", data);
            }).catch((err) => {
                console.log("Promise rejected:", err);
            }).finally(() => {
                console.log("Promise finally");
        })

     searchInput.value = ""
}

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