import {maxMinCoords} from "./functions.js"

class BoundingBox {

    /**
     * 
     * @param {Point[]} points 
     */
    constructor(points) {
        let maxMins = maxMinCoords(points);
        this.xMin = maxMins.xMin;
        this.xMax = maxMins.xMax;
        this.yMin = maxMins.yMin;
        this.yMax = maxMins.yMax;
    }

    /**
     * 
     * @param {Point} point 
     */
    contains(point) {
        return this.xMin <= point.x
        && this.xMax >= point.x
        && this.yMin <= point.y
        && this.yMax >= point.y;
    }

    asArray() {
        return [
            [this.xMin,this.yMin],
            [this.xMin,this.yMax],
            [this.xMax,this.yMax],
            [this.xMax,this.yMin]
        ];
    }
}

export {
    BoundingBox
}