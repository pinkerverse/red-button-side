const button = document.getElementById("redButton");
const sound = new Audio("sound.mp3");
const text = document.getElementById("warningText");

button.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play();

  text.innerText = "I TOLD YOU NOT TO 😡";
});
