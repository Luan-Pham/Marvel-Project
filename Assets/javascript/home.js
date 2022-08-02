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
        setComic(data);
      })
  
    
  })}


search()

var setCharacter = function(data){
    $("#characters").attr('src', data.data.results[0].thumbnail.path + "/portrait_uncanny.jpg")
}
var setDetails = function(data){
  $('#charDescription').html(data.data.results[0].description)
}

var setComic = function(data){
  $("#comics").attr('src', data.data.results[0].thumbnail.path + "/portrait_uncanny.jpg")}

var setWiki = function(data){
  $('#wikiLink').attr('href', data.data.results[0].urls[1].url)
}

// https://gateway.marvel.com:443/v1/public/characters/Thor/comics?apikey=331a8e964a4e496298bdfa8a074e7db6

//character ID range 1009301-1009726