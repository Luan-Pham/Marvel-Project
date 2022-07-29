//Base API https://gateway.marvel.com:443
//Public Key = 331a8e964a4e496298bdfa8a074e7db6
//

// import md5 from "js-md5";

var searcher = document.getElementById("search");
var submitBtn = document.getElementById("searchBtn");

const PUBLIC_KEY = "331a8e964a4e496298bdfa8a074e7db6";
const PRIVATE_KEY = "52a651da90a98a4375effb2030b8e3e359d9395e";

var marvelAPI = "https://gateway.marvel.com:443";

function search() {
  var picture = document.getElementById("thumbnail");
  var searchValue = document.getElementById("searchInput").value;
  console.log(searchValue);
  const ts = Number(new Date());
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  var characterURL =
    "https://gateway.marvel.com:443/v1/public/characters?ts=" +
    ts +
    "&name=" +
    searchValue +
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
      setImage(data)
      setDetails(data)
      setComics(data)
      setWiki(data)
    });
}

var setImage = function(data){
  $("#thumbnail").attr('src', data.data.results[0].thumbnail.path + "/portrait_uncanny.jpg")
}

var setDetails = function(data){
  $('#charDescription').html(data.data.results[0].description)
}

var setComics = function(data){
  $('#comicsLink').attr('href', data.data.results[0].urls[2].url)
}

var setWiki = function(data){
  $('#wikiLink').attr('href', data.data.results[0].urls[1].url)
}

submitBtn.addEventListener("click", search);

// https://gateway.marvel.com:443/v1/public/characters/Thor/comics?apikey=331a8e964a4e496298bdfa8a074e7db6

//character ID range 1009301-1009726