const button = document.getElementById("redButton");
const sound = new Audio("sound.mp3");

button.addEventListener("click", () => {
  sound.currentTime = 0; // restart sound if clicked fast
  sound.play();
});