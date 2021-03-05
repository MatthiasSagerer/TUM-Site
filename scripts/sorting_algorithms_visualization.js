﻿var countslider = document.getElementById("countslider");
var rect_count = document.getElementById("rectCount");
rect_count.innerHTML = countslider.value;

var speedslider = document.getElementById("speedslider");
var speed = document.getElementById("speed");
speed.innerHTML = speedslider.value;

var canvas2D = document.getElementById('canv');
var ctx = canvas2D.getContext('2d');

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
    heights = initHeightsArray(this.value);
    drawRects(heights, ctx);
}

function drawRects(array, context) {
    ctx.clearRect(0, 0, canvas2D.width, canvas2D.height);
    for (i = 0; i < array.length; i++) {
        context.fillRect(400 + (2 * i - array.length + 0.5) * width, (element_count - array[i]) * height_diff + 30, width, height_diff * array[i]);
    }
}

function randomizeButton() {
    shuffleArray(heights);
    drawRects(heights, ctx);
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function sleep(miliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < miliseconds);
}

function bubbleSort(miliseconds) {
    for (i = heights.length; i > 1; --i) {
        for (j = 0; j < i - 1; ++j) {
            if (heights[j] > heights[j + 1]) {
                swap(heights, j, j + 1);
                console.log(heights);
                sleep(miliseconds);
                drawRects(heights, ctx);
            }
        }
    }
}

function sort() {
    bubbleSort(200);
}

// initialize heigts array
heights = initHeightsArray(15)

speedslider.oninput = function () {
    speed.innerHTML = this.value;
}

drawRects(heights, ctx);
