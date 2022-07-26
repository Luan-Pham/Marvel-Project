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
  var searchValue = document.getElementById("searchInput").value;
  console.log(searchValue);
  const ts = Number(new Date());
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  console.log(hash);
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
    .then((data) => console.log(data));
}

submitBtn.addEventListener("click", search);
