function hidePlay(elementId) {
  const getPlay = document.getElementById(elementId);
  getPlay.classList.add("hidden");
}
function showPlayGround(elementId) {
  const getPlayGround = document.getElementById(elementId);
  getPlayGround.classList.remove("hidden");
}

function setKeyBackgroundColor(elementId) {
  const currentKey = document.getElementById(elementId);
  currentKey.style.backgroundColor = "#FFA500";
}

function getRandomAlphabet() {
  // step-1 -> set alphabet
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const convertedArrayAlphabet = alphabet.split("");
  // generate random integer number to iterate over the array
  const randomInteger = Math.round(Math.random() * 25);
  // step-3 store random alphabet and return
  const randomAlphabet = convertedArrayAlphabet[randomInteger];
  return randomAlphabet;
}

