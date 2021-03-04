var countslider = document.getElementById("countslider");
var rect_count = document.getElementById("rectCount");
rect_count.innerHTML = countslider.value;

var speedslider = document.getElementById("speedslider");
var speed = document.getElementById("speed");
speed.innerHTML = speedslider.value;

var heights = []
var element_count = 10;
var height_diff = 10;
var width = 10;

for (i = 1; i <= element_count; i++) {
    heights.push(i);
}

// Durstenfeld Shuffle Algorithm
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

countslider.oninput = function () {
    rect_count.innerHTML = this.value;
    elemt_count = rect_count;
}

speedslider.oninput = function () {
    speed.innerHTML = this.value;
}

var canvas = document.getElementById('canv');
var ctx = canvas.getContext('2d');

for (i = 0; i < heights.length; i++) {
    ctx.beginPath();
    ctx.rect(400 + (2 * i - heights.length+ 0.5) * width, (element_count - heights[i]) * height_diff + 30, width, height_diff * heights[i]);
    ctx.stroke();
}
// ctx.rect(150, 175, 200, 150);
// (700 - heights.length*2*width)/2 + i * 2*width
