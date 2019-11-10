class Vector {

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
     * @param {Vector} vector 
     */
    equivalent(vector) {
        return this.x / vector.x === this.y / vector.y;
    }

    /**
     * 
     * @param {Vector} vector 
     */
    sum(vector) {
        let x = this.x + vector.x;
        let y = this.y + vector.y;
        return new Vector(x,y);
    }

    /**
     * 
     * @param {Vector} vector 
     */
    destructiveSum(vector) {
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
    Vector
}