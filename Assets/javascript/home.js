var searcher = document.getElementById("search");
var submitBtn = document.getElementById("searchBtn");

const PUBLIC_KEY = "331a8e964a4e496298bdfa8a074e7db6";
const PRIVATE_KEY = "52a651da90a98a4375effb2030b8e3e359d9395e";

var marvelAPI = "https://gateway.marvel.com:443";

function search() {
  let charID = Math.floor(Math.random() * (1009726-1009301) + 1009301);
  console.log(charID);
  const ts = Number(new Date());
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  console.log(hash)
  var characterURL =
    "https://gateway.marvel.com:443/v1/public/characters/"+ charID + "?ts=" +
    ts +
    "&apikey=" +
    PUBLIC_KEY +
    "&hash=" +
    hash;

  fetch(characterURL)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      console.log(data.data.results[0].thumbnail)
      console.log(data.data.results[0].id)
      setCharacter(data)
    });
    fetch(characterURL)
    .then((response) => response.json())
    .then(function (data) {
      var comicURL =  "https://gateway.marvel.com:443/v1/public/characters/" +
      charID +
      "/comics?ts=" +
      ts +
      "&apikey=" +
      PUBLIC_KEY +
      "&hash=" +
      hash;
      fetch(comicURL)
      .then ((response) => response.json())
      .then (function (data) {
        console.log(data)
        setComic(data);
      })
  var characterName = data.data.results[0].name
  console.log(characterName)
  var movieURL = "https://api.themoviedb.org/3/search/movie?api_key=287dc70aa17f7ea83559b0c661966d3e&language=en-US&page=1&include_adult=false&query=" + characterName
  fetch(movieURL)
      .then ((response) => response.json())
      .then (function(data) {
        console.log(data)
        if (data.results.length == 0){($('#movies').attr('src', 'https://www.thetruecolors.org/wp-content/uploads/2021/02/marvel-logo-header-1.jpg'))}
        else {$('#movies').attr('src',"https://image.tmdb.org/t/p/w342" + data.results[0].poster_path)
        $('#movieTitle').text(data.results[0].title)}
      })
  
    
  })}


search()

var setCharacter = function(data){
    $("#characters").attr('src', data.data.results[0].thumbnail.path + "/portrait_uncanny.jpg")
    $("#characterName").text(data.data.results[0].name)
}
var setDetails = function(data){
  $('#charDescription').html(data.data.results[0].description)
}
var setComic = function(data){
  $("#comics").attr('src', data.data.results[0].thumbnail.path + "/portrait_uncanny.jpg")
  $("#comicTitle").text(data.data.results[0].title)
}

var setWiki = function(data){
  $('#wikiLink').attr('href', data.data.results[0].urls[1].url)
}

// https://gateway.marvel.com:443/v1/public/characters/Thor/comics?apikey=331a8e964a4e496298bdfa8a074e7db6

//character ID range 1009301-1009726