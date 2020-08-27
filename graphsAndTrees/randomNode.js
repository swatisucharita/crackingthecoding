const BST = require('./BST');
const Queue = require('../stacksQueues/queue');

BST.prototype.getCount = function() {
    let count = 0;
    let node = this.root;
    let q = new Queue();

    q.enqueue(node);

    while(!q.isEmpty()) {
        const n = q.dequeue();
        count++;

        if (n.left) {
            q.enqueue(n.left);
        }

        if (n.right) {
            q.enqueue(n.right);
        }
    }

    return count;
}

BST.prototype.iterateToN = function (c) {
    let count = 0;
    let node = this.root;
    let q = new Queue();

    q.enqueue(node);
    while (!q.isEmpty()) {
        const n = q.dequeue();
        count++;
        if (c === count) {
            return n;
        }

        if (n.left) {
            q.enqueue(n.left);
        }

        if (n.right) {
            q.enqueue(n.right);
        }
    }

    return undefined;
}

BST.prototype.getRandomNode = function (value) {
    // do a BFS count
  var count = this.getCount();
  // use BFS to iterate random node
  var random = Math.floor(Math.random() * count) + 1;
  return this.iterateToN(random);
}

/* TEST */
let bst = new BST();
bst.addNode(10);
bst.addNode(7);
bst.addNode(8);
bst.addNode(6);
bst.addNode(12);
bst.addNode(14);
bst.addNode(15);
console.log(bst.getRandomNode().value);