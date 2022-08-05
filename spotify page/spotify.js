console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myrange = document.getElementById('myrange');
let gif = document.getElementById('gif');
let mastSong = document.getElementById('mastSong');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV- Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan- Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"}
]
songitem.forEach((element,i)=>{
	console.log(element,i);
	element.getElementsByTagName('img')[0].src = songs[i].coverPath;
	element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
	if(audioElement.paused || audioElement.currentTime<=0){
		audioElement.play();
		masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
		gif.style.opacity = 1;
	}else{
		audioElement.pause();
		masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
		gif.style.opacity = 0;
	}
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
	// Update Seekbar
	progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
	myrange.value = progress;
})
myrange.addEventListener('change', ()=>{
	audioElement.currentTime = myrange.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
	Array.from(document.getElementsByClassName('songitemplay')).forEach((el)=>{
		el.classList.remove('fa-pause-circle');
        el.classList.add('fa-play-circle');
	})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
	element.addEventListener('click', (e)=>{
		makeAllPlays();
		songIndex = parseInt(e.target.id);
		e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
		audioElement.src = `songs/${songIndex+1}.mp3`;
		mastSong.innerText = songs[songIndex].songName;
		audioElement.currentTime=0;
		audioElement.play();
		masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
	})
})
document.getElementById('next').addEventListener('click',()=>{
	if(songIndex>=6){
		songIndex=0
	}else{
		songIndex += 1
	}
	audioElement.src = `songs/${songIndex+1}.mp3`;
	mastSong.innerText = songs[songIndex].songName;
	audioElement.currentTime=0;
	audioElement.play();
	masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
	if(songIndex<=6){
		songIndex=0
	}else{
		songIndex -= 1
	}
	audioElement.src = `songs/${songIndex+1}.mp3`;
	mastSong.innerText = songs[songIndex].songName;
	audioElement.currentTime=0;
	audioElement.play();
	masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})