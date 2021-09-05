var canvas = document.getElementById("canvas");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
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
    X = X + 8;
  }

  Tag(100, 70, "green", "Introduction");
  Tag(200, 70, "blue", "one_six");
  Tag(1200, 100, "blue", "Profile");
  Tag(1100, 40, "gray", "Rapport Building-Empathy");
  Tag(1200, 10, "orange", "Rapport Building- Energy");
}

//invoked AudioBar() to display
AudioBar();

// Function for Play the Audio
function PlayAudio() {
  play.style.display = "none";
  pause.style.display = "block";
}

// Function for Pause the Audio
function PauseAudio() {
  play.style.display = "block";
  pause.style.display = "none";
}

// Function For Creating Tags

function Tag(x, y, color, text) {
  var textwidth = text.length * 7;
  var positionx = x + textwidth / 2;
  // Rectangle Box
  ctx.fillStyle = color;
  ctx.fillRect(x, y, textwidth, 20);

  // Text inside Rectangle Box
  ctx.fillStyle = "white";
  ctx.font = "10pt bold";
  ctx.fillText(text, x + 5, y + 15);

  //Line
  ctx.beginPath();
  ctx.moveTo(positionx, y + 20);
  ctx.lineTo(positionx, 200);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();

  // Circle at the Bottom of tag
  ctx.beginPath();
  ctx.arc(positionx, 200, 5, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}
