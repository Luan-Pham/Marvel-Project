// API Key 287dc70aa17f7ea83559b0c661966d3e


var movieURL = "https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false"
var apiKey = "287dc70aa17f7ea83559b0c661966d3e"

function search() {
    var searchValue = document.getElementById("searchInput").value;
    var movieURL = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&language=en-US&page=1&include_adult=false&query=" + searchValue
    console.log(searchValue)
    fetch(movieURL)
        .then((response) => response.json())
        .then (function(data) {
            console.log(data)
            setMovie1(data)
            setMovie2(data)
            setMovie3(data)
        })
}

var setMovie1 = function(data){
    $("#movie1").attr('src', "https://image.tmdb.org/t/p/original" + data.results[0].poster_path)
    $('#sum1').text(data.results[0].overview)
    $('#title1').text(data.results[0].original_title)
  }

var setMovie2 = function(data){
    $("#movie2").attr('src', "https://image.tmdb.org/t/p/original" + data.results[1].poster_path)
    $('#sum2').text(data.results[1].overview)
    $('#title2').text(data.results[1].original_title)
  }

var setMovie3 = function(data){
    $("#movie3").attr('src', "https://image.tmdb.org/t/p/original" + data.results[2].poster_path)
    $('#sum3').text(data.results[2].overview)
    $('#title3').text(data.results[2].original_title)
  }    
$("#searchBtn").click(search)

