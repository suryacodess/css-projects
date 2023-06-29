//audio controller
const audio = document.querySelector("audio");
//play btn
const play = document.querySelector("#play");

let audios = [
  {
    id: 0,
    source: "./mp3/See You Again.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3",
    song: "See You Again (feat. Kali Uchis) ",
    singers: "Tyler, The Creator, kali Uchis",
  },
  {
    id: 1,
    source: "./mp3/swim.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b2735a0c2870f4f309e382d1fad6",
    song: "Swim",
    singers: "Chase Atlantic",
  },
  {
    id: 2,
    source: "./mp3/youngblood.mp3",
    img: "https://m.media-amazon.com/images/M/MV5BNDgwYzliZjgtMDc3OC00YjExLWI2ZjktOGVmODlkZTg4ZDYyXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg",
    song: "Youngblood",
    singers: "5 Seconds of Summer",
  },
  {
    id: 3,

    source: "./mp3/nate growing up.mp3",
    img: "https://i.scdn.co/image/ab67706c0000bebb5c3c330d8eac259fdcd3fbce",
    song: "Nate Growing Up",
    singers: "Labrinth",
  },
  {
    id: 4,
    source: "./mp3/sdp interlude.mp3",
    img: "https://images.genius.com/5f66b21e0c69ff6c30080f2c6795f025.924x924x1.jpg",
    song: "Sdp Interlude",
    singers: "Travis Scott",
  },
  {
    id: 5,
    source: "./mp3/sunflower.mp3",
    img: "https://i1.sndcdn.com/artworks-hrSUy9EbA4yDgbF0-rX1wEw-t500x500.jpg",
    song: "Sunflower - SpiderMan",
    singers: "Post Malone, Swae Lee",
  },
];

const img = document.querySelector("img"); //song image
const source = document.querySelector("source"); //song
const song = document.querySelector("#song"); //song name
const singer = document.querySelector("#singer"); //singer name

//play pause toggle btn
play.addEventListener("click", (e) => {
  let btn = e.target.classList.value;
  if (btn.includes("fa-play") === true) {
    e.currentTarget.classList.replace("fa-play", "fa-pause");
    audio.play();
  } else {
    e.currentTarget.classList.replace("fa-pause", "fa-play");
    audio.pause();
  }
});

//default song
let count = audios[0].id;
img.setAttribute("src", audios[count].img);
source.setAttribute("src", audios[count].source);
song.textContent = audios[count].song;
singer.textContent = audios[count].singers;

//next song
function next() {
  play.classList.replace("fa-play", "fa-pause");
  count++;

  if (count === 6) {
    count = 0;
  }
  if (count < 6) {
    img.setAttribute("src", audios[count].img);
    source.setAttribute("src", audios[count].source);
    song.textContent = audios[count].song;
    singer.textContent = audios[count].singers;
    audio.load();
    audio.play();
  } else {
    count = 0;
  }
}

//previous song
function previous() {
  play.classList.replace("fa-play", "fa-pause");

  if (count === 0) {
    count = 5;
  } else {
    count--;
  }

  img.setAttribute("src", audios[count].img);
  source.setAttribute("src", audios[count].source);
  song.textContent = audios[count].song;
  singer.textContent = audios[count].singers;
  audio.load();
  audio.play();
}
