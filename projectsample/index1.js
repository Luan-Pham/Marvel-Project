var API_KEY = "d0b1804084b6f29356388c6f4847506b";
var imgUrl = "https://image.tmdb.org/t/p/w500";
var url = "https://api.themoviedb.org/3/search/movie?api_key=d0b1804084b6f29356388c6f4847506b";

var searchBttn = document.querySelector("#search");
 var inputValue = document.querySelector("#value");
 var searchMovie = document.querySelector("#searchmovies");

function movieSection(movies){
    return movies.map((movie) => {
        return `
        <img src=${imgUrl + movie.poster_path} data-movie-id=${movie.id}/>
        `;
    })
}

 function displayMovie(movies) {
    var movieElement = document.createElement("div");
    movieElement.setAttribute("class", "movie");

    var template = `
        <section class="section">
          ${movieSection(movies)} 
        </section>
 `;

    movieElement.innerHTML = template;
    return movieElement;
}

 searchBttn.onclick = function(event) {
    event.preventDefault(); 
    var value = inputValue.value;

    var newUrl = url + "&query=" + value;

    fetch(newUrl)
        .then((response) => response.json())
        .then((data) => {
            var movies = data.results;
            var movieBlock  = displayMovie(movies);
            searchMovie.appendChild(movieBlock);
            console.log(data);
        })
        .catch((error) => {
            console.log("error", error);
        });
    console.log("Value: ", value);
 }