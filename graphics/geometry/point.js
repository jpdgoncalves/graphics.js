import { Vector } from "./vector";

class Point {

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    /**
     * 
     * @param {Point} point 
     */
    equals(point) {
        return this.x == point.x && this.y == point.y;
    }

    /**
     * 
     * @param {Vector} vector 
     */
    move(vector) {
        let x = this.x + vector.x;
        let y = this.y + vector.y;
        return new Point(x,y);
    }

    /**
     * 
     * @param {Vector} vector 
     */
    destructiveMove(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    /**
     * @returns {[number,number]}
     */
    asArray() {
        return [this.x,this.y];
    }
}

export {
    Point
}