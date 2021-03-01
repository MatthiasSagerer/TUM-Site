console.log('Hello World')

var speedslider = document.getElementById("speedslider");
var speed = document.getElementById("speed");
speed.innerHTML = speedslider.value;

speedslider.oninput = function () {
    speed.innerHTML = this.value;
}