var c = 0;
var songs = ["./rss/music/Honey.mp3", "./rss/music/KabhiAditi.mp3", "./rss/music/Sorry.mp3"];
const songName = ["You're my Honey Bunch", "Kabhi Kabhi Bubburi", "Sorry Na"];
var initial = true;
var a = document.getElementById("songs");
const nowPlaying = document.getElementById("songName");

a.addEventListener('ended', function(){
    document.getElementById("songs").src= songs[c]; 
    a.load();
    a.play();
    nowPlaying.innerHTML = songName[c];
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
            nowPlaying.innerHTML = songName[c];
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
    document.getElementById("songs").src=songs[c]; 
    a.load();
    a.play();
    console.log(c);
    nowPlaying.innerHTML = songName[c];
    c++;
    
    if(c>=songs.length){
        c=0;
    }
    pauseIcon.style.display = "inline";
    playIcon.style.display = "none";
});

var back = document.getElementById("back");
back.addEventListener('click', function(){
    if (!(c===0)) {
    c--;
    c--;
    nowPlaying.innerHTML = songName[c];
    document.getElementById("songs").src=songs[c];
    a.load();
    a.play();
    console.log(c); 
    c++;       
    };
    if (c <= -1) {
        c = 0;
        nowPlaying.innerHTML = songName[c];
        document.getElementById("songs").src=songs[c];
        a.load();
        a.play();
        console.log(c); 
        c++;       
    };
});

//Volume Control
var slider = document.getElementById("volSlider");
a.volume = 0.5;
slider.addEventListener("change", function(e) {
    a.volume = e.currentTarget.value / 100;
})