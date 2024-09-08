/*
step-1: TO hide the play now section
-> to hide the screen add the class hidden to
home section
step-2: remove hidden from play-ground section
*/
// Note -> we will do it more efficiently when we learn react.
/*
function letsPlay(){
    // step-1
    const getPlay = document.getElementById('play');
    getPlay.classList.add('hidden');
    // step-2
    const getField = document.getElementById("play-ground");
    getField.classList.remove('hidden');
}
*/

// Detect keyUp from keyboard
function detectKeyboard(event) {
  // Get the Key pressed and check right or wrong key pressed
  if(event.key === 'Escape') gameOver();
  const youPress = event.key.toUpperCase();
  const showKey = document.getElementById("present-text");
  const currentKey = showKey.innerText;
  if (youPress === currentKey) {
    // update score
    const currentScore = getById("update-score");
    let updateScore = currentScore + 1;
    setById("update-score", updateScore);
    removeBackgroundColor(currentKey.toLocaleLowerCase());
    startGame();
  } else {
    // update life
    const currentLife = getById("update-life");
    let updateLife = currentLife - 1;
    setById("update-life", updateLife);

      if (updateLife === 0) {
        gameOver();
        
      }
  }
}
document.addEventListener("keyup", detectKeyboard);

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
  // hide everything except play-ground
  hideElementById("play");
  hideElementById("final-score");
  // reset previous life and score
  setById("update-life", 5);
  setById("update-score", 0);
  setById("finalScore-value", 0);
  showElementById("play-ground");
  startGame();
}

// When score hit zero then game over
function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  // update final score
  const getScore = getById('update-score');
  setById('finalScore-value',getScore);

  // reset previous field key backgroundColor
  const getFieldText = document.getElementById('present-text');
  let getFieldTextLetter = getFieldText.innerText.toLowerCase();
  removeBackgroundColor(getFieldTextLetter);
}
