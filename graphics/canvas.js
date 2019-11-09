const CANVAS = document.createElement("canvas");
const CTX = CANVAS.getContext("2d");
let mouseX = 0;
let mouseY = 0;

const rect = CANVAS.getBoundingClientRect();
let should_animate = false;

/**
 * 
 * @param {string} CSSclass 
 * @param {HTMLElement} container 
 */
function initCanvas(CSSclass,container,height=100,width=100) {
    
    CANVAS.height=height;
    CANVAS.width=width;
    CANVAS.classList.add(CSSclass);
    container.appendChild(CANVAS);

    CANVAS.addEventListener("mousemove", mouseMoveEvent);
}

/**
 * 
 * @param {MouseEvent} event 
 */
function mouseMoveEvent(event) {
    mouseX = Math.round(event.clientX * (CANVAS.width / window.innerWidth));
    mouseY = Math.round(event.clientY * (CANVAS.height / window.innerHeight));
}

function clearCanvas() {
    CTX.clearRect(0,0,CANVAS.width,CANVAS.height);
}
/**
 * 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 */
function drawLine(x1,y1,x2,y2) {
    CTX.beginPath();
    CTX.moveTo(x1,y1);
    CTX.lineTo(x2,y2);
    CTX.stroke();
}
/**
 * 
 * @param {[number,number][]} coordinates 
 */
function drawLines(coordinates) {
    let start = coordinates[0];
    CTX.beginPath();
    CTX.moveTo(start[0],start[1]);

    for(let i = 1; i < coordinates.length; i++) {
        let point = coordinates[i];
        CTX.lineTo(point[0],point[1]);
    }

    CTX.stroke();
}

/**
 * 
 * @param {[number,number][]} coordinates 
 */
function drawFigureLines(coordinates) {
    let start = coordinates[0];
    CTX.beginPath();
    CTX.moveTo(start[0],start[1]);

    for(let i = 1; i < coordinates.length; i++) {
        let point = coordinates[i];
        CTX.lineTo(point[0],point[1]);
    }

    CTX.closePath();
    CTX.stroke();
}

/**
 * 
 * @param {[number,number][]} coordinates 
 */
function drawFigure(coordinates) {
    let start = coordinates[0];
    CTX.beginPath();
    CTX.moveTo(start[0],start[1]);

    for(let i = 1; i < coordinates.length; i++) {
        let point = coordinates[i];
        CTX.lineTo(point[0],point[1]);
    }

    CTX.closePath();
    CTX.fill();
}

/**
 * 
 * @param {[number,number,number,number]} dimensions 
 */
function drawRect(dimensions) {
    let [x,y,w,h] = dimensions;
    CTX.fillRect(x,y,w,h);
}
/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} r 
 */
function drawCircle(x,y,r) {
    CTX.beginPath();
    CTX.arc(x,y,r,0,Math.PI * 2);
    CTX.fill();
}

let drawImage = CTX.drawImage;

/**
 * 
 * @param {Function} update
 * @param {Function} draw
 */
function startAnimation(update,draw) {
    let callback = function() {
        if(should_animate) {
            clearCanvas();
            update();
            draw();
            window.requestAnimationFrame(callback);
        }
    }
    should_animate = true;
    window.requestAnimationFrame(callback);
}

function stopAnimation() {
    should_animate = false;
}

export {
    CANVAS,
    CTX,
    mouseX,
    mouseY,
    initCanvas,
    clearCanvas,
    drawLine,
    drawLines,
    drawFigureLines,
    drawFigure,
    drawRect,
    drawCircle,
    drawImage,
    startAnimation,
    stopAnimation
};