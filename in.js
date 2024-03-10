const video = document.querySelector(".video");
const toggleButton = document.querySelector(".toggleButton");
const progressBar = document.querySelector(".progress__filled");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
}

video.addEventListener("play", () => {
  toggleButton.innerHTML = "❚❚";
});

video.addEventListener("pause", () => {
  toggleButton.innerHTML = "►";
});

video.addEventListener("timeupdate", updateProgress);

toggleButton.addEventListener("click", togglePlay);