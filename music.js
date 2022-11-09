var c = 0;
var songs = ["./rss/music/Perfect.mp3", "./rss/music/AgarTumSathHo.mp3", "./rss/music/DuskTillDawn.mp3", "./rss/music/CheapThrills.mp3", "./rss/music/Snap.mp3", "./rss/music/LoveNwantiti.mp3", "./rss/music/LoveMeLikeYouDo.mp3"];
const songName = ["Perfect", "Agar Tum Sath Ho", "Dusk Till Dawn", "Cheap Thrills", "Snap", "Love Nwantiti", "Love me like you do"];
var initial = true;
var a = document.getElementById("songs");
var nowPlaying = document.getElementById("songName");
var playPause = document.getElementById("playPause");
var playIcon = document.getElementById("playIcon");
var pauseIcon = document.getElementById("pauseIcon");
var next = document.getElementById("next");
var back = document.getElementById("back");

next.style.display = "none";
back.style.display = "none";

// End of declerations and initializations
playPause.addEventListener("click", function() {
    if(initial) {
        nowPlaying.innerHTML = songName[c];
        a.src = songs[0];
        initial = false;
        next.style.display = "inline";
        back.style.display = "inline";
    }
});
playPause.addEventListener('click', function(){
    if (!a.paused) {
        a.pause();
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
    } else {
        a.play();
        pauseIcon.style.display = "inline";
        playIcon.style.display = "none";
    }
});

next.addEventListener('click', function(){
    updateSong("next");

    pauseIcon.style.display = "inline";
    playIcon.style.display = "none";
});

back.addEventListener('click', function(){
    updateSong("back");
});

function updateSong(updateType) {
    if (updateType === "next") {
        if(!initial) {
            if (c <= songs.length) {
                c++;
            } else {
                c = 0;
            }
        }
        document.getElementById("songs").src = songs[c];
        a.load();
        a.play();
        nowPlaying.innerHTML = songName[c];

    } else if (updateType === "back") {
        c--;
        document.getElementById("songs").src = songs[c];
        a.load();
        a.play();
        nowPlaying.innerHTML = songName[c];
    }
};

a.addEventListener('ended', updateSong("next"));
//Volume Control
var slider = document.getElementById("volSlider");
a.volume = 0.5;
slider.addEventListener("change", function(e) {
    a.volume = e.currentTarget.value / 100;
});