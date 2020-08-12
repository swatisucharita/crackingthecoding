const Graph = require('./graph');
const Queue = require("../stacksQueues/queue");

function findIndependentNodes(graph) {
    let nodes = [];
    for (let n in graph.nodes) {
        const node = graph.nodes[n];
        if (node.adjacents.length === 0) {
            nodes.push(n)
        }
    }
    return nodes;
}

function buildOrder(builds, dependencies) {
    let buildOrder = new Queue();
    const g = new Graph('directional');
    builds.forEach(build => {
        g.addNode(build);
    });
    dependencies.forEach(([destination, source]) => {
        console.log(source, destination);
        g.addEdge(source, destination);
    });

    let independentNodes = findIndependentNodes(g);
    while(independentNodes.length) {
        independentNodes.forEach(node => {
            buildOrder.enqueue(node);
            g.removeNode(node);
            independentNodes = findIndependentNodes(g);
        })
    }

    return buildOrder.toArray();
}

/* TEST */
const builds = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
console.log(buildOrder(builds, dependencies));