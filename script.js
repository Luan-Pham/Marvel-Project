//Base API https://gateway.marvel.com:443
//Public Key = 331a8e964a4e496298bdfa8a074e7db6
//
var searcher = document.getElementById("search");
var submitBtn = document.getElementById("searchBtn");

var marvelAPI = "https://gateway.marvel.com:443";

function search() {
  var searchValue = document.getElementById("searchInput").value;
  console.log(searchValue);

  var characterURL =
    "https://gateway.marvel.com:443/v1/public/characters?name=" +
    searchValue +
    "&apikey=331a8e964a4e496298bdfa8a074e7db6";

  fetch(characterURL);
}

submitBtn.addEventListener("click", search);
