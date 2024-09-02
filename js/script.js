/*
step-1: TO hide the play now section
-> to hide the screen add the class hidden to
home section
step-2: remove hidden from play-ground section
*/
// Note -> we will do it more efficiently when we learn react.
// function letsPlay(){
//     // step-1
//     const getPlay = document.getElementById('play');
//     getPlay.classList.add('hidden');
//     // step-2
//     const getField = document.getElementById("play-ground");
//     getField.classList.remove('hidden');
// }

// little bit smart way to perform above task
function startGame() {
  const myAlphabet = getRandomAlphabet();

  // display text on playground field
  const dynamicText = document.getElementById("present-text");
  dynamicText.innerText = myAlphabet;

  //  set background color for keyboard current key
  const letter = myAlphabet.toLowerCase();
  setKeyBackgroundColor(letter);
}
function letsPlay() {
  hidePlay("play");
  showPlayGround("play-ground");
  startGame();
}
