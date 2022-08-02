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
    var searchValue = $("#searchInput").val()
  const ts = Number(new Date());
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  console.log(hash)
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
      var comicURL =  "https://gateway.marvel.com:443/v1/public/characters/" +
      data.data.results[0].id +
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
          setComic1(data)
          setComic2(data)
          setComic3(data);    
        })  
    })
        
}


var setComic1 = function(data){
  $("#comic1").attr('src', data.data.results[0].thumbnail.path + "/portrait_uncanny.jpg")
  $("#title1").text(data.data.results[0].title)
  $("#sum1").text(data.data.results[0].description)
  $("#link1").attr('href', data.data.results[0].urls[0].url)
}

var setComic2 = function(data){
    $("#comic2").attr('src', data.data.results[1].thumbnail.path + "/portrait_uncanny.jpg")
    $("#title2").text(data.data.results[1].title)
    $("#sum2").text(data.data.results[1].description)
    $("#link2").attr('href', data.data.results[1].urls[0].url)
  }

  var setComic3 = function(data){
    $("#comic3").attr('src', data.data.results[2].thumbnail.path + "/portrait_uncanny.jpg")
    $("#title3").text(data.data.results[2].title)
    $("#sum3").text(data.data.results[2].description)
    $("#link3").attr('href', data.data.results[2].urls[0].url)
  }

submitBtn.addEventListener("click", search);