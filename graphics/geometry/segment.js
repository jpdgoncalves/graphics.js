import { Point } from "./point.js";

class Segment {

    /**
     * 
     * @param {Point} startingPoint  
     * @param {Point} endingPoint 
     */
    constructor(startingPoint,endingPoint) {
        this.startingPoint = new Point(startingPoint.x, startingPoint.y);
        this.endingPoint = new Point(endingPoint.x, endingPoint.y);
    }

    /**
     * 
     * @param {Segment} segment 
     */
    interWithSeg(segment) {
        const x1 = this.startingPoint.x, y1 = this.startingPoint.y;
        const x2 = this.endingPoint.x, y2 = this.endingPoint.y;
        const x3 = segment.startingPoint.x, y3 = segment.startingPoint.y;
        const x4 = segment.endingPoint.x, y4 = segment.endingPoint.y;
        
        const den = (x1-x2) * (y3-y4) - (y1-y2) * (x3-x4);
        if (den === 0) return undefined;

        const t = ( (x1-x3) * (y3-y4) - (y1-y3) * (x3-x4) ) / den;
        const u = -( ( (x1-x2) * (y1-y3) - (y1-y2) * (x1-x3) ) / den );

        return (t >= 0 && t <= 1 && u >= 0 && u <= u) ? new Point( x1 - t * (x2-x1), y1 - t * (y2-y1)) : undefined;
    }

    /**
     * 
     * @param {Segment} segment 
     */
    interWithLine(segment) {
        const x1 = this.startingPoint.x, y1 = this.startingPoint.y;
        const x2 = this.endingPoint.x, y2 = this.endingPoint.y;
        const x3 = segment.startingPoint.x, y3 = segment.startingPoint.y;
        const x4 = segment.endingPoint.x, y4 = segment.endingPoint.y;
        
        const den = (x1-x2) * (y3-y4) - (y1-y2) * (x3-x4);
        if (den === 0) return undefined;

        const t = ( (x1-x3) * (y3-y4) - (y1-y3) * (x3-x4) ) / den;
        const u = -( ( (x1-x2) * (y1-y3) - (y1-y2) * (x1-x3) ) / den );
        return (t >= 0 && t <= 1 && u >= 0) ? new Point( x1 - t * (x2-x1), y1 - t * (y2-y1)) : undefined;
    }

    /**
     * 
     * @param {Point} point 
     */
    containsPoint(point) {
        const x = point.x;
        const y = point.y;
        const x1 = this.startingPoint.x;
        const y1 = this.startingPoint.y;
        const x2 = this.endingPoint.x;
        const y2 = this.endingPoint.y;

        const dx = x2 - x1;
        const dy = y2 - y1;

        if(dx == 0) return (x1 == x && y1 <= y && y <= y2)
        || (x1 == x && y2 <= y && y <= y1);

        if(dy == 0) return (y1 == y && x1 <= x && x <= x2)
        || (y1 == y && x2 <= x && x <= x1);

        const m = dy / dx;
        const b = y1 - m * x1;
        
        return y == m * x + b;
    }

    /**
     * 
     * @param {Segment} segment 
     */
    equal(segment) {
        return this.startingPoint.equals(segment.startingPoint)
        && this.endingPoint.equals(segment.endingPoint);
    }

    asArray() {
        return [
            [this.startingPoint.x, this.startingPoint.y],
            [this.endingPoint.x, this.endingPoint.y]
        ];
    }
}

export {
    Segment
}