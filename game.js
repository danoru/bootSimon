let gamePattern = []; // This is the pattern the CPU picks for the game using the nextSequence function.

let userClickedPattern = []; // This is the pattern of play from the user based on their clicks.

const buttonColors = ["red", "blue", "green", "yellow"]; // This is the array of the four colors being used in the game.

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  let cpuSound = new Audio("sounds/" + randomChosenColor +".mp3");
  cpuSound.play();
  console.log(gamePattern);
};

$(".btn").click(function() {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);  
  let playerSound = new Audio("sounds/" + userChosenColor +".mp3");
  playerSound.play();
  animatePress(userChosenColor);
  console.log(userChosenColor);
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+ currentColor).removeClass("pressed");
  }, 100)
};