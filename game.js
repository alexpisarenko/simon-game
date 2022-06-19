var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  console.log(userClickedPattern);
});

function animatePress(color) {
  $("#" + color).addClass("pressed");
  setTimeout(() => {
    $("." + color).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function nextSequence() {
  var randomNum = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNum];

  gamePattern.push(randomChosenColor);

  $("." + randomChosenColor)
    .fadeIn(50)
    .fadeOut(50)
    .fadeIn(50);

  $(document).keypress(() => {
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
  });
}
