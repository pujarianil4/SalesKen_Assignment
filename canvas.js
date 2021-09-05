var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 20;
canvas.height = "400";
var ctx = canvas.getContext("2d");

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
}

AudioBar()
