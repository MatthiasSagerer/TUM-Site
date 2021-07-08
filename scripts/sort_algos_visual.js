var countslider = document.getElementById("countslider");
var rect_count = document.getElementById("rectCount");
rect_count.innerHTML = countslider.value;

// TODO: connect speed variable to the waiting time for the sorting algorithms
//       higher speed -> lower waiting time (e.g. inverse, linear with neg. slope, quadratic or exp with neg exponent)
var speedslider = document.getElementById("speedslider");
var speed = document.getElementById("speed");
speed.innerHTML = speedslider.value;

var canvas2D = document.getElementById('canv');
var ctx = canvas2D.getContext('2d');

var heights = []
var element_count = 15;
var height_diff = 10;
var width = 10;
var algorithm = '';

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
heights = initHeightsArray(15)

countslider.oninput = function () {
    rect_count.innerHTML = this.value;
    element_count = this.value;
    heights = initHeightsArray(this.value);
    drawRects(heights, ctx);
}

speedslider.oninput = function () {
    speed.innerHTML = this.value;
}

drawRects(heights, ctx);

function drawRects(array, context) {
    ctx.clearRect(0, 0, canvas2D.width, canvas2D.height);
    console.log('In draw: ' + array);
    for (i = 0; i < array.length; i++) {
        context.fillRect(400 + (1.75 * i - array.length * 0.875 + 0.5) * width, (element_count - array[i]) * height_diff + 30, width, height_diff * array[i]);
    }
}

function clearCanv() {
    ctx.clearRect(0, 0, canvas2D.width, canvas2D.height);
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

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
// bug fix: animation
function bubbleSort(milliseconds) {
    console.log('Bubble')
    temp = []
    for (i = heights.length; i > 1; --i) {
        for (j = 0; j < i - 1; ++j) {
            if (heights[j] > heights[j + 1]) {
                swap(heights, j, j + 1);
                sleep(200);
                ctx.clearRect(0, 0, canvas2D.width, canvas2D.height);
                console.log(heights);
            }
        }
    }
}

function quickSort(milliseconds) {
    console.log('Quick');
}
// TODO: Adding Quick Sort algorithm

function mergeSort(milliseconds) {
    console.log('Merge');
    // TODO: Adding Merge Sort Algorithm
}

function heapSort(milliseconds) {
    console.log('Heap');
    // TODO: Adding Head Sort Algorithm
}

function smoothSort(milliseconds) {
    console.log('Smooth');
    // TODO: Adding Smooth Sort Algorithm
}

function shellSort(milliseconds) {
    console.log('Shell');
    // TODO: Adding Shell Sort Algorithm
}
// bug fix: animation
// bug fix: sorting algorithm
function cycleSort(milliseconds) {
    console.log('Cycle');
    // writes = 0;
    for (var cycle_start = 0; cycle_start < heights.length; cycle_start++) {
        item = heights[cycle_start];
        pos = cycle_start;
        for (var i = cycle_start + 1; i <= heights.length; i++) {
            if (heights[i] < item) {
                pos += 1;
            }
        }
        if (pos == cycle_start) {
            continue;
        }
        while (item == heights[pos]) {
            pos += 1;
        }
        heights[pos], item = item, heights[pos];
        // writes += 1;
        while (pos != cycle_start) {
            pos = cycle_start;
            for (var i = cycle_start + 1; i <= heights.length; i++) {
                if (heights[i] < item) {
                    pos += 1;
                }
            }
            while (item == heights[pos]) {
                pos += 1;
            }
            heights[pos], item = item, heights[pos]
            // writes += 1;
        }
        console.log(array);
        sleep(milliseconds);
    }
    // return writes
}

function selectionSort(milliseconds) {
    console.log('Selection');
    // TODO: Adding Selection Sort Algorithm
}
// bug fix: animation
function insertionSort(milliseconds) {
    console.log('Insertion');
    i = 1
    while (i < heights.length) {
        j = 1
        while ((j > 0) && (heights[j - 1] > heights[j])) {
            swap(heights, j, j - 1);
            j -= 1;
        }
        i += 1;
    }
}

function gnomeSort(milliseconds) {
    console.log('Gnome');
    // TODO: Adding Gnome Sort Algorithm
}

function combSort(milliseconds) {
    console.log('Comb');
    // TODO: Adding Comb Sort Algorithm
}

function cocktailSort(milliseconds) {
    console.log('Cocktail');
    // TODO: Adding Cocktail Sort Algorithm
}

function oddevenSort(milliseconds) {
    console.log('Oddeven');
    // TODO: Adding Oddeven Sort Algorithm
}

function radixSort(milliseconds) {
    console.log('Radix');
    // TODO: Adding Radix Sort Algorithm
}

function selectAlgorithm(num) {
    switch (num) {
        case 1:
            algorithm = 'Bubble';
            break;
        case 2:
            algorithm = 'Quick';
            break;
        case 3:
            algorithm = 'Merge';
            break;
        case 4:
            algorithm = 'Heap';
            break;
        case 5:
            algorithm = 'Smooth';
            break;
        case 6:
            algorithm = 'Shell';
            break;
        case 7:
            algorithm = 'Cycle';
            break;
        case 8:
            algorithm = 'Selection';
            break;
        case 9:
            algorithm = 'Insertion';
            break;
        case 10:
            algorithm = 'Gnome';
            break;
        case 11:
            algorithm = 'Comb';
            break;
        case 12:
            algorithm = 'Cocktail';
            break;
        case 13:
            algorithm = 'Oddeven';
            break;
        case 14:
            algorithm = 'Radix';
            break;
    }
    document.getElementById('algorithm').innerHTML = algorithm + ' Sort';
}

function sort(millisecs) {
    switch (algorithm) {
        case 'Bubble':
            bubbleSort(millisecs);
            break;
        case 'Quick':
            quickSort(millisecs);
            break;
        case 'Merge':
            mergeSort(millisecs);
            break;
        case 'Heap':
            heapSort(millisecs);
            break;
        case 'Smooth':
            smoothSort(millisecs);
            break;
        case 'Shell':
            shellSort(millisecs);
            break;
        case 'Cycle':
            cycleSort(millisecs);
            break;
        case 'Selection':
            selectionSort(millisecs);
            break;
        case 'Insertion':
            insertionSort(millisecs);
            break;
        case 'Gnome':
            gnomeSort(millisecs);
            break;
        case 'Comb':
            combSort(millisecs);
            break;
        case 'Cocktail':
            cocktailSort(millisecs);
            break;
        case 'Oddeven':
            oddevenSort(millisecs);
            break;
        case 'Radix':
            radixSort(millisecs);
            break;
        default:
            bubbleSort(millisecs);
            break;
    }
}
