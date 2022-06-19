var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var blueSound = new Audio("sounds/blue.mp3");
var greenSound = new Audio("sounds/green.mp3");
var redSound = new Audio("sounds/red.mp3");
var yellowSound = new Audio("sounds/yellow.mp3");
var wrongSound = new Audio("sounds/wrong.mp3");

function nextSequence(){
    var randomNum = Math.floor((Math.random() * 4));
    var randomChosenColor = buttonColors[randomNum];

    gamePattern.push(randomChosenColor);

    $("." + randomChosenColor).fadeIn(50).fadeOut(50).fadeIn(50);

    $(document).keypress(()=>{
        switch(randomChosenColor){
            case "blue":
                blueSound.play();
                break;
            case "green":
                greenSound.play();
                break;
            case "red":
                redSound.play();
                break;
            case "yellow":
                yellowSound.play();
                break;
            default:
                return;
        }
        
    })
    
    
    
}

console.log(nextSequence());
