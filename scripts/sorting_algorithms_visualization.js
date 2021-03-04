var speedslider = document.getElementById("speedslider");
var speed = document.getElementById("speed");
speed.innerHTML = speedslider.value;

/* Testing the function
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
*/

speedslider.oninput = function () {
    speed.innerHTML = this.value;
}

var heights = []
for (i = 1; i <= 10; i++) {
    heights.push(i); 
}


var canvas = document.getElementById('canv');
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.rect(150, 175, 200, 150);
ctx.stroke();
