const buttonColors = ["red", "blue", "green", "yellow"]; // This is the array of the four colors being used in the game.

let gamePattern = []; // This is the pattern the CPU picks for the game using the nextSequence function.

let userClickedPattern = []; // This is the pattern of play from the user based on their clicks.

let gameStart = false; // This is the initial game state to be toggled to true when a key is pressed.

let level = 0; // This is the initial level counter to be incremented whenever nextSequence is called.

// This function checks whether or not the game has started and then starts on the initial keypress ONLY by calling nextSequence.
$("body").keydown(function(){
  if (!gameStart) {
    $("#level-title").text("Level " + level)
    nextSequence();
    gameStart = true;
  }
});

// This function calls a random number and references the corresponding color from the array buttonColors and animates and plays a sound for the selected color and increments the level counter.
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level)
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  let cpuSound = new Audio("sounds/" + randomChosenColor +".mp3");
  cpuSound.play();
  console.log(gamePattern);
};

// This function recognizes a player click and animates and plays a sound based on the player's click.
$(".btn").click(function() {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);  
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});

// This function plays a sound based on the clicked color button.
function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// This function adds animation to the clicked color button by adding and removing the class "pressed".
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+ currentColor).removeClass("pressed");
  }, 100)
};

// This function checks if the answer to the current level is correct or incorrect.
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence()}
        ,1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over! You made it to level " + level + ". Press Any Key to Restart.");
    startOver();
  };
};

// Resets the game state so that it can be started over.
function startOver() {
  gameStart = false;
  level = 0;
  gamePattern = [];
}