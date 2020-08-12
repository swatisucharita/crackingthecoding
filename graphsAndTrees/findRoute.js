// Find route between nodes
// BFS
let Graph = require('./graph');
const Queue = require('../stacksQueues/queue');

Graph.prototype.DFS = function(source, destination) {
    if (!this.hasNode(source)) { return false; }
    let nodeFound = false;
    let sourceNode = this.nodes[source];
    sourceNode.visited = true;
    if (sourceNode.value === destination) { return true; }

    for (let i = 0; i< sourceNode.adjacents.length; i++) {
        let adjacent = sourceNode.adjacents[i];
        if (!this.nodes[adjacent].visited) {
            nodeFound = this.DFS(adjacent, destination);
            if (nodeFound) { break; }
        }
    }
    return nodeFound;
};

Graph.prototype.BFS = function(source, destination) {
    if(!this.hasNode(source)) { return false; }
    let q = new Queue();
    let nodeFound = false;
    let sourceNode = this.nodes[source];
    q.enqueue(sourceNode);

    while(!q.isEmpty()) {
        const node = q.dequeue();
        if (node.value === destination) {
            nodeFound = true;
            break;
        }

        for (let i=0; i<node.adjacents.length; i++) {
            let adjacent = this.nodes[node.adjacents[i]];
            q.enqueue(adjacent);
        }
    }

    return nodeFound;
};

/* TEST */
let g = new Graph('directional');
g.addNode("a");
g.addNode("b");
g.addNode("c");
g.addNode("d");
g.addNode("e");
g.addEdge("a", "c");
g.addEdge("a", "d");
g.addEdge("d", "b");

/*
 a  c   d    b
*/

console.log(g.DFS("a", "b") === true);
console.log(g.BFS("a", "b") === true);