
let fillbar = document.querySelector(".fill");
let audios = ["audio1.mp3", "audio2.mp3", "audio3.mp3"];
let covers = ["img1.jpg", "img2.jpg", "img3.jpg"];
let backgrounds = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
let songTitle = ["Providence", "Feed the Machine", "Hell is coming"];
let currentTime = document.querySelector(".time");

// Audio

let audio = new Audio();
let currentSong = 0;


window.onload = playSong;



function playSong() {
  audio.src = audios[currentSong];
  audio.play();
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    let playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<img src="pause.png" alt="" />';
    playBtn.style.paddingLeft = "30px";
  } else {
    audio.pause();
    playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<img src="play.png" alt="" />';
    playBtn.style.paddingLeft = "33px";
  }
}

// Line

audio.addEventListener("timeupdate", function() {
  let position = audio.currentTime / audio.duration;
  fillbar.style.width = position * 100 + "%";

  // lenght
  convertTime(Math.round(audio.currentTime));

  // next audio

  if (audio.ended) {
    nextAudio();
  }
});

function convertTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  // minutes
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  currentTime.textContent = min + ":" + sec;

  // how long is the song
  totalTime(Math.round(audio.duration));
}

function totalTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;


  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  currentTime.textContent += " & " + min + ":" + sec;
}

// buttons for next song

function nextAudio() {
  currentSong++;
  if (currentSong > 2) {
    currentSong = 0;
  }
  playSong();
  playBtn = document.querySelector(".play-pause");
  playBtn.innerHTML = '<img src="pause.png" alt="" />';
  playBtn.style.paddingLeft = "30px";
 
  // change images

  $(".img img").attr("src", covers[currentSong]);
  $(".player-bg img").attr("src", backgrounds[currentSong]);
  document.getElementById("song-title").innerHTML = songTitle[currentSong];
}

function prevAudio() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = 2;
  }
  playSong();
  playBtn = document.querySelector(".play-pause");
  playBtn.innerHTML = '<img src="pause.png" alt="" />';
  playBtn.style.paddingLeft = "30px";

  // change images and titles

  $(".img img").attr("src", covers[currentSong]);
  $(".player-bg img").attr("src", backgrounds[currentSong]);
  document.getElementById("song-title").innerHTML = songTitle[currentSong];
}

