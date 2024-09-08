function hideElementById(elementId) {
  const getPlay = document.getElementById(elementId);
  getPlay.classList.add("hidden");
}
function showElementById(elementId) {
  const getPlayGround = document.getElementById(elementId);
  getPlayGround.classList.remove("hidden");
}
// highlight the play field key backgroundColor
function setKeyBackgroundColor(elementId) {
  const currentKey = document.getElementById(elementId);
  currentKey.style.backgroundColor = "#FFA500";
}
// Clear Right key background and continue the game
function removeBackgroundColor(elementId) {
  const currentKey = document.getElementById(elementId);
  currentKey.style.backgroundColor = "";
}
// update score and life
function getById(elementId) {
  const value = document.getElementById(elementId);
  let currentScore = parseInt(value.innerText);
  return currentScore;
}
function setById(elementId, value) {
  const setValue = document.getElementById(elementId);
  setValue.innerText = value;
}
// This function generate random letter
function getRandomAlphabet() {
  // step-1 set alphabet
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const convertedArrayAlphabet = alphabet.split("");
  // step-2 generate random integer number to iterate over the array
  const randomInteger = Math.round(Math.random() * 25);
  // step-3 store random alphabet and return
  const randomAlphabet = convertedArrayAlphabet[randomInteger];
  return randomAlphabet;
}
