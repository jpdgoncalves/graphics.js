import {getID} from "./utils.js";

class Graph {

    constructor() {
        /**
         * @type {Object.<number,{value : *, edges : Set.<number>}>}
         */
        this._vertexes = {};
        /**
         * @type {Object.<number,{vextexId1 : number, vertexId2 : number}}
         */
        this._edges = {};
    }

    /**
     * @returns {number[]}
     */
    get vertexes() {
        return Object.keys(this._vertexes);
    }

    /**
     * @returns {number[]}
     */
    get edges() {
        return Object.keys(this._edges);
    }

    /**
     * 
     * @param {number} vertexId 
     */
    vertex(vertexId) {
        if(vertexId in this._vertexes) {
            return this._vertexes[vertexId]
        } else {
            throw new Error("This vertex does not exist in this graph");
        }
    }

    /**
     * 
     * @param {number} edgeId 
     */
    edge(edgeId) {
        if(edgeId in this._edges) {
            return this._edges[edgeId];
        } else {
            throw new Error("This edge does not exist in this graph");
        }
    }

    /**
     * 
     * @param {number} vextexId 
     */
    hasVexter(vextexId) {
        return vextexId in this._vertexes;
    }

    /**
     * 
     * @param {number} edgeId 
     */
    hasEdge(edgeId) {
        return edgeId in this._edges;
    }

    createVertex(value) {
        let id = getID();
        let vertex = {
            value : value,
            edges : new Set()
        };
        this._vertexes[id] = vertex;
        return id;
    }

    /**
     * 
     * @param {number} vertexId1 
     * @param {number} vertexId2 
     */
    createEdge(vertexId1, vertexId2) {

        let id;

        if(vertexId1 in this._vertexes && vertexId2 in this._vertexes) {
            
            id = getID();
            let edge = {
                vertexId1 : vertexId1,
                vertexId2 : vertexId2
            }

            this._edges[id] = edge;

        } else {
            throw new Error("This vortex does not exist in this graph");
        }
    }

    /**
     * 
     * @param {number} edgeId 
     */
    deleteEdge(edgeId) {
        if(edgeId in this._edges) {
            let {vertexId1, vertexId2} = this._edges[edgeId];
            this._vertexes[vertexId1].edges.delete(vertexId1);
            this._vertexes[vertexId2].edges.delete(vertexId2);
            delete this._edges[edgeId];
        } else {
            throw new Error("This edge does not exist in this graph");
        }
    }

    /**
     * 
     * @param {number} vertexId 
     */
    deleteVertex(vertexId) {
        if(vertexId in this._vertexes) {
            let edges = this._vertexes[vertexId].edges.values();
            for(let edgeId of edges) {
                this.deleteEdge(edgeId);
            }
            delete this._vertexes[vertexId];
        } else {
            throw new Error("This vertex does not exist in this graph");
        }
    }
}

export {
    Graph
}