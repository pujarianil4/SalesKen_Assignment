var canvas = document.getElementById("canvas");
var play= document.getElementById("play")
var pause = document.getElementById("pause")
// Width and height of Canvas
canvas.width = window.innerWidth - 20;
canvas.height = "400";
//
var ctx = canvas.getContext("2d");

//Parameters for audioBar
var X = 30;
var Y = [];
var width = 3;
var height = [];

// Creating array of Y position and height of bar
for (let i = 0; i < 160; i++) {
  Y.push(Math.random() * 70 + 100);
  height.push(Math.random() * 100 + 100);
}

// Function to Create Audiobar 
function AudioBar() {
  ctx.fillStyle = "gray";
  var length = 160;
  for (let i = 1; i < length; i++) {
    ctx.fillRect(X, Y[i], width, height[i]);
    X=X+8
  }

  Tag(100,70,"green","Introduction")
 
}

//invoked AudioBar() to display
AudioBar()

// Function for Play the Audio
function PlayAudio(){

    play.style.display= "none"
    pause.style.display= "block"

}

// Function for Pause the Audio
function PauseAudio(){

    play.style.display= "block"
    pause.style.display= "none"
}

// Function For Creating Tags

function Tag(x,y,color,text){
   
    var textwidth= text.length*7
   
   // Rectangle Box
    ctx.fillStyle=color
    ctx.fillRect(x,y,textwidth,20)

  // Text inside Rectangle Box
  ctx.fillStyle="white"
  ctx.font = "10pt bold";
  ctx.fillText(text,x+5,y+15);
    
}
