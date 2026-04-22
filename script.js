const button = document.getElementById("redButton");

// list of sounds
const sounds = [
  "fart1.m4a",
  "fart2.m4a",
  "fart3.m4a",
  "fart4.m4a",
  "fart5.m4a"
];

button.addEventListener("click", () => {
  // pick random sound
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const sound = new Audio(sounds[randomIndex]);

  sound.currentTime = 0;
  sound.play();
});
