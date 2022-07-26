//Base API https://gateway.marvel.com:443
//Public Key = 331a8e964a4e496298bdfa8a074e7db6

var searcher = document.getElementById("search");
var submitBtn = document.getElementById("searchBtn");

var marvelAPI = "https://gateway.marvel.com:443";

function search(str) {
  var comicURL =
    "https://gateway.marvel.com:443/v1/public/characters/" +
    str +
    "/comics?apikey=331a8e964a4e496298bdfa8a074e7db6";
  fetch(comicURL).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      responseText.textContent = response.status;
    }
    return response.json();
  });
}

submitBtn.addEventListener("click", search());
