var countslider = document.getElementById("countslider");
var rect_count = document.getElementById("rectCount");
rect_count.innerHTML = countslider.value;

var speedslider = document.getElementById("speedslider");
var speed = document.getElementById("speed");
speed.innerHTML = speedslider.value;

var heights = []
var element_count = 15;
var height_diff = 10;
var width = 10;

// Durstenfeld Shuffle Algorithm
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function initHeightsArray(size) {
    arr = []
    for (i = 1; i <= size; i++) {
        arr.push(i);
    }
    return arr
}

countslider.oninput = function () {
    rect_count.innerHTML = this.value;
    element_count = this.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    heights = initHeightsArray(this.value);
    drawRects(heights, ctx);
    console.log(element_count);
}

function drawRects(array, context) {
    for (i = 0; i < array.length; i++) {
        context.fillRect(400 + (2 * i - array.length + 0.5) * width, (element_count - array[i]) * height_diff + 30, width, height_diff * array[i]);
    }
}

// initialize heigts array
heights = initHeightsArray(15)

speedslider.oninput = function () {
    speed.innerHTML = this.value;
}

var canvas = document.getElementById('canv');
var ctx = canvas.getContext('2d');

drawRects(heights, ctx);
