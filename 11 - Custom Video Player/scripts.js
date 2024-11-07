const $ = (e) => document.querySelector(e);

const player = $('.player');
const video = $('.viewer');
const toggle = $('.toggle');
const volume = $('input[name="volume"]');
const playbackRate = $('input[name="playbackRate"]');
const progressFilled = $('.progress__filled');

function togglePlay(e) {
		if (video.paused) {
				video.play();
				toggle.innerHTML = '| |';
		} else {
				video.pause();
				toggle.innerHTML = '►';
		}
}

function changeVolume(e) {
		video.volume = this.value;
}

function changePlaybackRate(e) {
		video.playbackRate = this.value;
}

function updateProgressFilled() {
	progressFilled.style.flexBasis = video.currentTime / video.duration * 100 + '%';
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
volume.addEventListener('change', changeVolume);
playbackRate.addEventListener('change', changePlaybackRate);
setInterval(updateProgressFilled, 1000);

