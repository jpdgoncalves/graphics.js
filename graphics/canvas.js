import { getID } from "./utils.js";
import { Point } from "./geometry/point.js";

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
        this.image = this.ctx.drawImage;
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
     * @param {Point} point1 
     * @param {*} point2 
     */
    line(point1, point2) {
        this.ctx.beginPath();
        this.ctx.moveTo(point1.x, point1.y);
        this.ctx.lineTo(point2.x, point2.y);
        this.ctx.stroke();
    }

    /**
     * 
     * @param {Point[]} points 
     */
    lines(points) {
        let startPoint = points[0];
        this.ctx.beginPath();
        this.ctx.moveTo(startPoint.x, startPoint.y);

        for (let i = 1; i < points.length; i++) {
            let point = points[i];
            this.ctx.lineTo(point.x, point.y);
        }

        this.ctx.stroke();
    }

    /**
     * 
     * @param {Point[]} points 
     */
    strokeFigure(points) {
        let startPoint = points[0];
        this.ctx.beginPath();
        this.ctx.moveTo(startPoint.x, startPoint.y);

        for (let i = 1; i < points.length; i++) {
            let point = points[i];
            this.ctx.lineTo(point.x, point.y);
        }

        this.ctx.closePath();
        this.ctx.stroke();
    }

    /**
     * 
     * @param {Point[]} points 
     */
    fillFigure(points) {
        let startPoint = points[0];
        this.ctx.beginPath();
        this.ctx.moveTo(startPoint.x, startPoint.y);

        for (let i = 1; i < points.length; i++) {
            let point = points[i];
            this.ctx.lineTo(point.x, point.y);
        }

        this.ctx.closePath();
        this.ctx.fill();
    }

    /**
     * 
     * @param {Point} point1 
     * @param {Point} point2 
     */
    rect(point1, point2) {
        this.ctx.fillRect(point1.x, point1.y, point2.x - point1.x, point2.y - point1.y);
    }

    /**
     * 
     * @param {Point} center 
     * @param {number} radius 
     */
    circle(center, radius) {
        this.ctx.beginPath();
        this.ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
}

export {
    Painter
}