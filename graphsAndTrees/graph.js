class Node {
    constructor(value) {
        this.value = value;
        this.adjacents = [];
        this.meta = {multiplicity: 1};
    }
}

const UNDIRECTIONAL = 'undirectional';
const DIRECTIONAL = 'directional';

class Graph {
    constructor(type) {
        this.type = type;
        this.nodes = {};
    }

    hasNode(val) {
        return !!this.nodes[val];
    }

    getNode(val) {
        return this.nodes[val] || {};
    }

    addNode(node) {
        if (this.nodes[node]) {
            this.nodes[node].meta.multiplicity += 1;
            return this.nodes[node];
        }

        this.nodes[node] = new Node(node);
        return this.nodes[node];
    }

    removeNode(node) {
        if (!this.hasNode(node)) { return null;}

        delete this.nodes[node];
        for (let n in this.nodes) {
            const no = this.nodes[n];
            const i = no.adjacents.indexOf(node);
            if (i >= 0) {
                no.adjacents.splice(i, 1);
            }
        }
    }

    addEdge(source, destination) {
        let sourceNode = this.nodes[source];
        let destinationNode = this.nodes[destination];

        if (!(sourceNode && destinationNode)) {
            return "Source and destination not present";
        }

        if (!sourceNode.adjacents.includes(destination)) {
            sourceNode.adjacents.push(destination);
        }

        if (this.type === 'undirectional' && !destinationNode.adjacents.includes(source)) {
            destinationNode.adjacents.push(source);
        }
    }
}

module.exports = Graph;