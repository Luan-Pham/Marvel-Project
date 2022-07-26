fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=15&key=AIzaSyBglBWTnUxsVbAaOW2BFlHfr5ybqGhFjp8")
    .then((result)=>{
       return result.json()
}).then((response)=>{
    console.log(response)
    var videos = response.items
    var charVideo = document.querySelector(".char-video")
    for(video of videos){
        
    }
})