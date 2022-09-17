var c = 0;
var songs = ["./rss/music/Honey.mp3", "./rss/music/KabhiAditi.mp3", "./rss/music/Sorry.mp3"];
var initial = true;
var a = document.getElementById("au");


a.addEventListener('ended', function(){
document.getElementById("backLink").style.visibility = "visible";
document.getElementById("au").src=songs[c]; 
a.load();  
a.play()
console.log(c); 
c++;

if(c>=songs.length){
    c=0;
}

});

// End of music.js
var playPause = document.getElementById("playPause");
var playIcon = document.getElementById("playIcon");
var pauseIcon = document.getElementById("pauseIcon");

playPause.addEventListener('click', function(){
    if (!a.paused) {
        a.pause();
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
    } else {
        if(initial) {
            a.src = songs[0];
            initial = false;
            c++;
        }
        a.play();
        pauseIcon.style.display = "inline";
        playIcon.style.display = "none";
    }
});

var next = document.getElementById("next");
next.addEventListener('click', function(){
    document.getElementById("au").src=songs[c]; 
    a.load();
    a.play();
    console.log(c); 
    c++;
    
    if(c>=songs.length){
        c=0;
    }
    pauseIcon.style.display = "inline";
    playIcon.style.display = "none";
});

var back = document.getElementById("back");
back.addEventListener('click', function(){
    if (c != 0) {
        c--;
        c--;
    document.getElementById("au").src=songs[c];
    a.load();
    a.play();
    console.log(c); 
    c++;
    
    if(c>=songs.length){
        c=0;
    }
    };
});

//Volume Control
var slider = document.getElementById("volSlider");
a.volume = 0.5;
slider.addEventListener("change", function(e) {
    a.volume = e.currentTarget.value / 100;
})