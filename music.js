var c = 0;
var songs = ["./rss/music/DuskTillDawn.mp3", "./rss/music/CheapThrills.mp3", "./rss/music/Snap.mp3", "./rss/music/LoveNwantiti.mp3", "./rss/music/LoveMeLikeYouDo.mp3", "./rss/music/AgarTumSathHo.mp3"];

var a = document.getElementById("au");
a.addEventListener('ended', function(){

document.getElementById("au").src=songs[c]; 
a.load();  
console.log(c); 
c++;

if(c>=songs.length){
    c=0;
}

});

// End of music.js
var playPause = document.getElementById("playPause");

playPause.addEventListener('click', function(){
    if (!a.paused) {
        a.pause()
        playPause.innerHTML = "Play";
        playPause.style.backgroundColor = "rgb(19, 17, 150)";
    } else {
        a.play()
        playPause.innerHTML = "Pause";
        playPause.style.backgroundColor = "rgb(20, 10, 100)";
    }
});