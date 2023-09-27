console.log("This is spotify")

let songIndex = 0;

let audioElement = new Audio("song/1.mp3");

let myprogress = document.getElementById("myprogress");
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let songNote = document.getElementById("songNote");

let songItems = Array.from(document.getElementsByClassName("songItems"));

let songs = [
    {songName:"Nenu Nuvvantu - Orange", songPath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"Sanchaari - RadheShyam", songPath:"song/2.mp3", coverPath:"cover/2.jpg"},
    {songName:"Choodandi Saaru", songPath:"song/3.mp3", coverPath:"cover/3.jpg"},
    {songName:"Pachandaname - Sakhi", songPath:"song/4.mp3", coverPath:"cover/4.jpg"}
]

// songItems.forEach((item, i) => {
//     item.getElementsByTagName("img")[0].src = songs[i].coverPath
//     console.log(item)
// })

// Play, Pause, Click
masterPlay.addEventListener("click", () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
        // document.getElementById(`${songIndex}`).classList.remove("fa-circle-play");
        // document.getElementById(`${songIndex}`).classList.add("fa-circle-pause");
    }else{

        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0 ;
        // document.getElementById(`${songIndex}`).classList.remove("fa-circle-pause");
        // document.getElementById(`${songIndex}`).classList.add("fa-circle-play");

    }
    
    }
)

// Listen Events

audioElement.addEventListener("timeupdate", () => {

    //update seekBar
    var progressPercent = Math.floor((audioElement.currentTime / audioElement.duration)*100);
    myprogress.value = progressPercent;
})

//ProgressBar
myprogress.addEventListener("change", () => {
    var seekto = (myprogress.value * audioElement.duration)/100;
    audioElement.currentTime=seekto;
})

let makeAllPlays = () => {
    Array.from(document.getElementsByClassName("smallPlay")).forEach((item) =>{
    item.classList.remove("fa-circle-pause");
    item.classList.add("fa-circle-play");

})
}

Array.from(document.getElementsByClassName("smallPlay")).forEach((item) =>{
    item.addEventListener("click", () =>
    {
        makeAllPlays();
        item.classList.remove("fa-circle-play");
        item.classList.add("fa-circle-pause");
        songIndex = parseInt(item.id);
        audioElement.src = `song/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
        songNote.innerText = songs[songIndex-1].songName;

    })
})

//next preious

document.getElementById("next").addEventListener('click', () => {
    if(songIndex>=4){
        songIndex = 1;
    }else{
        songIndex++;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    songNote.innerText = songs[songIndex-1].songName;
})

document.getElementById("previous").addEventListener('click', () => {
    
    if(songIndex<=1){
        songIndex = 4;
    }else{
        songIndex--;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    songNote.innerText = songs[songIndex-1].songName;
})