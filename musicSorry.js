let c = 0;
let songs = ["./rss/music/Honey.mp3", "./rss/music/KabhiAditi.mp3", "./rss/music/Sorry.mp3"];
const songName = ["You're my Honey Bunch", "Kabhi Kabhi Bubburi", "Sorry Na"];
let initial = true;
let a = document.getElementById("songs");
let nowPlaying = document.getElementById("songName");
let playPause = document.getElementById("playPause");
let playIcon = document.getElementById("playIcon");
let pauseIcon = document.getElementById("pauseIcon");
let next = document.getElementById("next");
let back = document.getElementById("back");
let updateType;

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
let slider = document.getElementById("volSlider");
a.volume = 0.5;
slider.addEventListener("change", function(e) {
    a.volume = e.currentTarget.value / 100;
});