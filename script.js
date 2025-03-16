const img = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");

const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music Collection
let songs = [
	{
		name: `01 Supersoaker`,
		displayName: `Supersoaker`,
		artist: `Kings of Leon`,
		image: "Supersoaker.jpg",
	},
	{
		name: `02 Rock City`,
		displayName: `Rock City`,
		artist: `Kings of Leon`,
		image: `Rock City.jpg`,
	},
	{
		name: `03 Don't Matter`,
		displayName: `Don't Matter`,
		artist: `Kings of Leon`,
		image: `Don't Matter.jpg`,
	},
	{
		name: `04 Beautiful War`,
		displayName: `Beautiful War`,
		artist: `Kings of Leon`,
		image: `Beautiful War.jpg`,
	},
	{
		name: `05 Temple`,
		displayName: `Temple`,
		artist: `Kings of Leon`,
		image: `Temple.jpg`,
	},
	{
		name: `06 Wait for Me`,
		displayName: `Wait for Me`,
		artist: `Kings of Leon`,
		image: `Wait for Me.png`,
	},
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
	isPlaying = true;
	playBtn.classList.replace("fa-play", "fa-pause");
	playBtn.setAttribute("title", "Pause");
	music.play();
}
// Pause
function pauseSong() {
	isPlaying = false;
	playBtn.classList.replace("fa-pause", "fa-play");
	playBtn.setAttribute("title", "Play");
	music.pause();
}

// Play or Pause Event listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Update DOM

function loadSong(song) {
	title.textContent = song.displayName;
	artist.textContent = song.artist;
	music.src = `${song.name}.m4a`;
	img.src = `./assets/${song.image}`;
}

// Current Song

let songIndex = 0;

// Previous Song

function prevSong() {
	songIndex--;
	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}

	loadSong(songs[songIndex]);
	playSong();
}
// Next Song

function nextSong() {
	songIndex++;
	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}

	loadSong(songs[songIndex]);
	playSong();
}
// On Load - Select First Song

loadSong(songs[songIndex]);

// Event Listeners

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// const image = document.querySelector("img");
// const title = document.getElementById("title");
// const artist = document.getElementById("artist");
// const music = document.querySelector("audio");
// const currentTimeEl = document.getElementById("current-time");
// const durationEl = document.getElementById("duration");
// const progress = document.getElementById("progress");
// const progressContainer = document.getElementById("progress-container");
// const prevBtn = document.getElementById("prev");
// const playBtn = document.getElementById("play");
// const nextBtn = document.getElementById("next");

// // Music
// const songs = [
// 	{
// 		name: "Beautiful War",
// 		displayName: "Beautiful War",
// 		artist: "Kings of Leon",
// 	},
// 	//   {
// 	//     name: 'jacinto-2',
// 	//     displayName: 'Seven Nation Army (Remix)',
// 	//     artist: 'Jacinto Design',
// 	//   },
// 	//   {
// 	//     name: 'jacinto-3',
// 	//     displayName: 'Goodnight, Disco Queen',
// 	//     artist: 'Jacinto Design',
// 	//   },
// 	//   {
// 	//     name: 'metric-1',
// 	//     displayName: 'Front Row (Remix)',
// 	//     artist: 'Metric/Jacinto Design',
// 	//   },
// ];

// // Check if Playing
// let isPlaying = false;

// // Play
// function playSong() {
// 	isPlaying = true;
// 	playBtn.classList.replace("fa-play", "fa-pause");
// 	playBtn.setAttribute("title", "Pause");
// 	music.play();
// }

// // Pause
// function pauseSong() {
// 	isPlaying = false;
// 	playBtn.classList.replace("fa-pause", "fa-play");
// 	playBtn.setAttribute("title", "Play");
// 	music.pause();
// }

// // Play or Pause Event Listener
// playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// // Update DOM
// function loadSong(song) {
// 	title.textContent = song.displayName;
// 	artist.textContent = song.artist;
// 	music.src = `music/${song.name}.mp3`;
// 	assets.src = `img/${song.name}.jpg`;
// }

// // Current Song
// let songIndex = 0;

// // Previous Song
// function prevSong() {
// 	songIndex--;
// 	if (songIndex < 0) {
// 		songIndex = songs.length - 1;
// 	}
// 	loadSong(songs[songIndex]);
// 	playSong();
// }

// // Next Song
// function nextSong() {
// 	songIndex++;
// 	if (songIndex > songs.length - 1) {
// 		songIndex = 0;
// 	}
// 	loadSong(songs[songIndex]);
// 	playSong();
// }

// // On Load - Select First Song
// loadSong(songs[songIndex]);

// // Update Progress Bar & Time
// function updateProgressBar(e) {
// 	if (isPlaying) {
// 		const { duration, currentTime } = e.srcElement;
// 		// Update progress bar width
// 		const progressPercent = (currentTime / duration) * 100;
// 		progress.style.width = `${progressPercent}%`;
// 		// Calculate display for duration
// 		const durationMinutes = Math.floor(duration / 60);
// 		let durationSeconds = Math.floor(duration % 60);
// 		if (durationSeconds < 10) {
// 			durationSeconds = `0${durationSeconds}`;
// 		}
// 		// Delay switching duration Element to avoid NaN
// 		if (durationSeconds) {
// 			durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
// 		}
// 		// Calculate display for currentTime
// 		const currentMinutes = Math.floor(currentTime / 60);
// 		let currentSeconds = Math.floor(currentTime % 60);
// 		if (currentSeconds < 10) {
// 			currentSeconds = `0${currentSeconds}`;
// 		}
// 		currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
// 	}
// }

// // Set Progress Bar
// function setProgressBar(e) {
// 	const width = this.clientWidth;
// 	const clickX = e.offsetX;
// 	const { duration } = music;
// 	music.currentTime = (clickX / width) * duration;
// }

// // Event Listeners
// prevBtn.addEventListener("click", prevSong);
// nextBtn.addEventListener("click", nextSong);
// music.addEventListener("ended", nextSong);
// music.addEventListener("timeupdate", updateProgressBar);
// progressContainer.addEventListener("click", setProgressBar);
