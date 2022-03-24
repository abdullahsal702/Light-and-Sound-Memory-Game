// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [0, 0, 0, 0, 0, 0, 0, 0];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var guessLabel = 0; 
var highScore = 0;
//document variables 
var wait = document.getElementById("waitText");
var go = document.getElementById("goText");
const documentObjects = [wait, go];
var goTimeoutID = undefined; 

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("guessCounterLabel").classList.remove("hidden");
  //dont want start button/highscore label to keep fading in once game starts 
  document.getElementById("startBtn").classList.add("disable-animations");
  startAnimation();
  btnGrowAnimation();
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("guessCounterLabel").classList.add("hidden");
  resetAnimation();
  btnShrinkAnimation();
  for(let i=0;i<documentObjects.length;i++){
    hideText(documentObjects[i]);
  }
  //prevents bug where game is stopped and Go! still appears
  clearTimeout(goTimeoutID);
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
  document.getElementById("button"+btn).classList.remove("incorrect")
}

function IncorrectButton(btn){
  document.getElementById("button"+btn).classList.add("incorrect");
}

function flashIncorrectButton(btn){
  IncorrectButton(btn);
  playErrorSound(); 
  setTimeout(clearButton, 200, btn);
  setTimeout(IncorrectButton, 300, btn); 
  setTimeout(clearButton, 500, btn);
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  hideText(go);
  displayText(wait);
  guessCounter = 0;
  guessLabel = 0; 
  updateGuessCounterLabel();
  randomize(...pattern);
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  setTimeout(hideText, delay, wait);
  goTimeoutID = setTimeout(displayText, delay, go);
}

function loseGame(){
  stopGame();
  displayModal("Game Over!", "#e4040f");
  // alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  displayModal("You Win!", "#52cc00");
  // alert("Good job! You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // add game logic here
  if(btn == pattern[guessCounter]){
    guessLabel++; 
    updateGuessCounterLabel();
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        updateHighScoreLabel(8);
        winGame();
      }
      else{
        progress++; 
        setTimeout(playClueSequence, 500);
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    flashIncorrectButton(btn);
    setTimeout(loseGame, 525);
    updateHighScoreLabel(progress); 
  }
}

//Math.floor(Math.random() * (max - min + 1) + min) 
function randomize(){
  for(let i=0; i <= progress; i++){
    pattern[i] = Math.floor(Math.random() * 4 + 1) 
  }
}

function updateGuessCounterLabel(){
  document.getElementById("guessCounterLabel").innerHTML = guessLabel.toString()+" / "+(progress+1).toString();
}

function updateHighScoreLabel(progress){
  highScore = Math.max(highScore, progress); 
  document.getElementById("highScoreLabel").innerHTML = "Highscore: " + highScore.toString(); 
}

//const texts = document.getElementsByClassName is an array 
function startAnimation(){
  const texts = document.getElementsByClassName("toggle-text");
  texts[0].classList.add("fadeOut");
  texts[1].classList.add("fadeOut");
  texts[2].classList.add("fadeOut");
}

function resetAnimation(){
  const texts = document.getElementsByClassName("toggle-text");
  texts[0].classList.remove("fadeOut");
  texts[1].classList.remove("fadeOut");
  texts[2].classList.remove("fadeOut");
}

//could be more efficiently implemented
function btnGrowAnimation(){
  const btns = document.getElementsByClassName("btn"); 
  btns[0].classList.remove("gameBtnShrink"); 
  btns[1].classList.remove("gameBtnShrink"); 
  btns[2].classList.remove("gameBtnShrink"); 
  btns[3].classList.remove("gameBtnShrink"); 
  btns[0].classList.add("gameBtnGrow"); 
  btns[1].classList.add("gameBtnGrow"); 
  btns[2].classList.add("gameBtnGrow"); 
  btns[3].classList.add("gameBtnGrow"); 
} 

function btnShrinkAnimation() {
  const btns = document.getElementsByClassName("btn"); 
  btns[0].classList.remove("gameBtnGrow"); 
  btns[1].classList.remove("gameBtnGrow"); 
  btns[2].classList.remove("gameBtnGrow"); 
  btns[3].classList.remove("gameBtnGrow");
  btns[0].classList.add("gameBtnShrink"); 
  btns[1].classList.add("gameBtnShrink"); 
  btns[2].classList.add("gameBtnShrink"); 
  btns[3].classList.add("gameBtnShrink"); 
}

function displayText(text){
  text.classList.remove("hidden");
}

function hideText(text){
  text.classList.add("hidden");
}

function displayModal(text, color){
  var modal = document.getElementById("modal");
  document.getElementById("modalText").innerHTML = text; 
  document.getElementById("modalContent").style.backgroundColor = color; 
  modal.style.display = "block";
  
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }  
  }
}

function playErrorSound() {
  var audio = new Audio("https://cdn.glitch.global/744c757a-d9bf-4801-b7af-af998c858b7e/error_sound.mp3?v=1648060275246");
  audio.play();
}
 