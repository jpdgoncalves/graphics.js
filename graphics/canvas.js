import { getID } from "./utils.js";

class Painter {

    /**
     * 
     * @param {number} height 
     * @param {number} width 
     */
    constructor(height = 100, width = 100) {
        this.canvas = document.createElement("canvas");
        this.canvas.id = getID();
        this.canvas.height = height;
        this.canvas.width = width;
        this.ctx = this.canvas.getContext("2d");

        //Reflect
        this.drawImage = this.ctx.drawImage;
    }

    get color() {
        return this.ctx.fillStyle;
    }

    set color(color) {
        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;
    }

    /**
     * 
     * @param {HTMLElement} container 
     */
    displayIn(container) {
        container.appendChild(this.canvas);
    }

    clear() {
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    }

    /**
     * 
     * @param {[number,number]} point1 
     * @param {[number,number]} point2 
     */
    line(point1, point2) {
        this.ctx.beginPath();
        this.ctx.moveTo(point1[0], point1[1]);
        this.ctx.lineTo(point2[0], point2[1]);
        this.ctx.stroke();
    }

    /**
     * 
     * @param {[number,number][]} points 
     */
    lines(points) {
        let startPoint = points[0];
        this.ctx.beginPath();
        this.ctx.moveTo(startPoint[0], startPoint[1]);

        for (let i = 1; i < points.length; i++) {
            let [x,y] = points[i];
            this.ctx.lineTo(x, y);
        }

        this.ctx.stroke();
    }

    /**
     * 
     * @param {[number,number][]} points 
     */
    strokeFigure(points) {
        let startPoint = points[0];
        this.ctx.beginPath();
        this.ctx.moveTo(startPoint[0], startPoint[1]);

        for (let i = 1; i < points.length; i++) {
            let [x,y] = points[i];
            this.ctx.lineTo(x, y);
        }

        this.ctx.closePath();
        this.ctx.stroke();
    }

    /**
     * 
     * @param {[number,number][]} points 
     */
    fillFigure(points) {
        let startPoint = points[0];
        this.ctx.beginPath();
        this.ctx.moveTo(startPoint[0], startPoint[1]);

        for (let i = 1; i < points.length; i++) {
            let [x,y] = points[i];
            this.ctx.lineTo(x, y);
        }

        this.ctx.closePath();
        this.ctx.fill();
    }

    /**
     * 
     * @param {[number,number]} point1 
     * @param {[number,number]} point2 
     */
    fillRect(point1, point2) {
        let [x1,y1] = point1;
        let [x2,y2] = point2;
        this.ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
    }

    /**
     * 
     * @param {[number,number]} center 
     * @param {number} radius 
     */
    strokeCircle(center, radius) {
        this.ctx.beginPath();
        this.ctx.arc(center[0], center[1], radius, 0, Math.PI * 2);
        this.ctx.stroke();
    }

    /**
     * 
     * @param {[number,number]} center 
     * @param {number} radius 
     */
    fillCircle(center,radius) {
        this.ctx.beginPath();
        this.ctx.arc(center[0], center[1], radius, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
}

export {
    Painter
}