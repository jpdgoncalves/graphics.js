import { Point } from "./point";
import { Vector } from "./vector";

/**
 * 
 * @param {Point} point1 
 * @param {Point} point2 
 */
function calculateVector(point1,point2) {
    let x = point2.x - point1.x;
    let y = point2.y - point1.y;
    return new Vector(x,y);
}
/**
 * 
 * @param {Point} point1 
 * @param {Point} point2 
 */
function calculateDistance(point1,point2) {
    let xDistance = point2.x - point1.x;
    let yDistance = point2.y - point1.y;
    return Math.sqrt( Math.pow(xDistance,2) + Math.pow(yDistance,2) );
}
/**
 * 
 * @param {Point[]} points 
 */
function pointsAsNumberPairs(points) {
    return points.map(function(point) {
        return [point.x,point.y];
    });
}
/**
 * 
 * @param {[number,number][]} numberPairs 
 */
function numberPairsAsPoints(numberPairs) {
    return numberPairs.map(function(numberPair) {
        return new Point(numberPair[0],numberPair[1]);
    });
}

/**
 * 
 * @param {Point[]} points
 * @returns {{xMax: number, xMin: number, yMax: number, yMin: number}} 
 */
function maxMinCoords(points) {
    return points.reduce(function(accum,value) {
        if(accum.xMin === undefined) {
            accum.xMin = value.x;
        } else {
            accum.xMin = Math.min(accum.xMin, value.x);
        }

        if(accum.xMax === undefined) {
            accum.xMax = value.x;
        } else {
            accum.xMax = Math.max(accum.xMax, value.x);
        }

        if(accum.yMin === undefined) {
            accum.yMin = value.y;
        } else {
            accum.yMin = Math.min(accum.yMin, value.y);
        }

        if(accum.yMax === undefined) {
            accum.yMax = value.y;
        } else {
            accum.yMax = Math.max(accum.yMax, value.y);
        }

        return accum;
    },{});
}

/**
 * 
 * @param {number} width 
 * @param {number} height 
 * @param {number} xCells 
 * @param {number} yCells 
 */
function Grid(width, height, xCells, yCells) {

    /**
     * 
     * @param {number} xPos 
     * @param {number} yPos 
     */
    let getCoords = function(xPos,yPos) {
        return [
            (width * xPos) / xCells,
            (height * yPos) / yCells 
        ];
    };

    return getCoords;
}

export {
    calculateVector,
    calculateDistance,
    pointsAsNumberPairs,
    numberPairsAsPoints,
    maxMinCoords,
    Grid
}