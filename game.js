let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  let soundColor = new Audio("sounds/" + randomChosenColor +".mp3");
  soundColor.play();
  console.log(gamePattern);
}

