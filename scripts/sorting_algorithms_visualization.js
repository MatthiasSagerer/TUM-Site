var speedslider = document.getElementById("speedslider");
var speed = document.getElementById("speed");
speed.innerHTML = speedslider.value;

speedslider.oninput = function () {
    speed.innerHTML = this.value;
}


var canvas = document.getElementById('canv');
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.rect(150, 175, 200, 150);
ctx.stroke();