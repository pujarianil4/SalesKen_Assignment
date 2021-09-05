var canvas = document.getElementById("canvas");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var Counter = 0;
var Interval;
// Width and height of Canvas
canvas.width = "1300";
canvas.height = "400";
//
var ctx = canvas.getContext("2d");

function AudioPlayer() {
  // Parameters for AudioBar
  var X = 5;
  var Y = [];
  var width = 3;
  var height = [];

  // Creating array of Y position and height of bar
  for (let i = 0; i < 160; i++) {
    Y.push(Math.random() * 70 + 100);
    height.push(Math.random() * 100 + 100);
  }

  // Function to Create Audiobar
  return function () {
    ctx.fillStyle = "red";
    var length = 160;
    for (let i = 1; i < length; i++) {
      if (i > Counter) {
        ctx.fillStyle = "gray";
      }
      ctx.fillRect(X, Y[i], width, height[i]);
      X = X + 8;
      if (i == length - 1) {
        X = 5;
      }
    }
    if (Counter == length - 1) {
      clearInterval(Interval);
    }

    Tag(100, 70, "green", "Introduction");
    Tag(200, 70, "blue", "one_six");
    Tag(1150, 100, "blue", "Profile");
    Tag(1050, 40, "gray", "Rapport Building-Empathy");
    Tag(1150, 10, "orange", "Rapport Building- Energy");
  };
}

//invoked AudioBar() to display
var AudioBar = AudioPlayer();
AudioBar();

// Function for Play the Audio
function PlayAudio() {
  play.style.display = "none";
  pause.style.display = "block";

  clearInterval(Interval);

  Interval = setInterval(() => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    Counter++;
    AudioBar();
  }, 1000);
}

// Function for Pause the Audio
function PauseAudio() {
  play.style.display = "block";
  pause.style.display = "none";

  clearInterval(Interval);
}

// Function For Creating Tags

function Tag(x, y, color, text) {
  var textwidth = text.length * 7;
  var positionx = x + textwidth / 2;
  // Rectangle Box
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.fillRect(x, y, textwidth, 20);
  ctx.closePath();

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
  ctx.closePath();
}

//Function to Start Audio from any Point
function AudioStartFrom(e) {
  
  var layer1= e.layerX/8


  Counter = Math.floor(layer1);
console.log(e)
  // Circle on Mouse Clicked
  ctx.beginPath();
  ctx.arc(e.offsetX, e.offsetY, 30, 0, Math.PI * 2);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();

  // To remove Circle
  setTimeout(() => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    AudioBar();
  }, 100);
}

canvas.addEventListener("click", AudioStartFrom);
