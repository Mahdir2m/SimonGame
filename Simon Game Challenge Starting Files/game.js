


var userClickedPattern=[];

var gamePattern=[];
var arrayy=[];
var buttonColours=["red", "blue", "green", "yellow"];

var level=0;
function nextSequence(){
  level++;
  $("h1").text("level "+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  var fileName="sounds/" + randomChosenColour + ".mp3";
  playSound(fileName);

  $("#"+randomChosenColour).fadeOut();
  setTimeout(function(){$("#"+randomChosenColour).fadeIn();},10);

};


$(document).on("keypress", function(){


  $("h1").text("Level 0");


  nextSequence();
  $(document).off("keypress");


});


function playSound(fileName){
var sound = new Audio(fileName);
 sound.play();
};


//----- flash----------//

// $(document).ready(() => {
// setInterval(() => {
//         $("#"+randomChosenColour).fadeIn();
//         $("#"+randomChosenColour).fadeOut();}, 10);
// });


$('.btn').on('click', function(){
  var userChosenColour= $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  var fileCreator="sounds/" + userChosenColour + ".mp3";
  playSound(fileCreator);


if  (userClickedPattern[userClickedPattern.length-1]!==gamePattern[userClickedPattern.length-1]){



  $("body").toggleClass("game-over");
  setTimeout(function(){$("body").toggleClass("game-over");},100);
  $("h1").text("Game Over , Press any key to restart");
  playSound("sounds/wrong.mp3");
  var randomNumber=Math.floor(Math.random()*4);
  arrayy.push(randomNumber);
  $(document).on("keypress", function(){


    level=1;

    userClickedPattern=[];
    gamePattern=[];

    var randomChosenColour=buttonColours[arrayy[0]];

    gamePattern.push(randomChosenColour);

    var fileName="sounds/" + randomChosenColour + ".mp3";
    playSound(fileName);

    $("#"+randomChosenColour).fadeOut();
    setTimeout(function(){$("#"+randomChosenColour).fadeIn();},10);

      $("h1").text("Level 1");

    $(document).off("keypress");

  });






}
else if (userClickedPattern[gamePattern.length-1]===gamePattern[gamePattern.length-1] && gamePattern.length >0) {
  setTimeout(function(){nextSequence();},1000);
  userClickedPattern=[];
 arrayy=[];
}

});



function animatePress(currentColour){

$("#"+currentColour).toggleClass("pressed");
setTimeout(function(){$("#"+currentColour).toggleClass("pressed");},100);

};
