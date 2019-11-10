import { BoundingBox } from "./boundingbox.js";
import { Segment } from "./segment.js";
import { Point } from "./point.js";

class Figure {

    /**
     * 
     * @param {Point[]} points 
     */
    constructor(points) {
        this.points = points.map((point) => new Point( point.x, point.y));
        /**
         * @type {Segment[]}
         */
        this.segments = [];
        this.boudingBox = new BoundingBox(points);

        for(let i = 0, j = points.length-1; i < points.length; j = i++) {
            this.segments.push(new Segment( points[j], points[i]));
        }
    }

    /**
     * 
     * @param {Point} point
     * @returns {number}
     */
    isPointInside(point) {
        if(!this.boudingBox.contains(point)) return false;

        let horizontal_line = new Segment(point, new Point(point.x+1,point.y));
        let intersections = 0;

        for(let segment of this.segments) {
            if(segment.interWithLine(horizontal_line)) {
                intersections++;
            }
        }

        return intersections && 1 ? true : false;
    }

    asArray() {
        return this.points.map((point) => [point.x,point.y]);
    }

}

export {
    Figure
}