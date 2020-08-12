const Queue = require("../stacksQueues/queue");

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.meta = { multiplicity: 0};
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    addNode(value) {
        let node = new Node(value);
        if (!this.root){
            this.root = node;
            return this.root;
        }

        let n = this.root;
        while(n) {
            if (value < n.value) {
                if(!n.left) {n.left = node; break;}
                n = n.left;
            } else if (value > n.value) {
                if (!n.right) { n.right = node; break;}
                n = n.right;
            } else {
                n.meta.multiplicity += 1;
            }
        }
    }

    removeNode(val) {
        if (!this.root) {
            return null;
        }

        let node = this.root;
        let root = null;

        while(node) {
            if (node.value === val) {
                let newRoot = null;
                if (node.left) {
                    newRoot = node.left;
                    newRoot.right = node.right;
                } else if (node.right) {
                    newRoot = node.right;
                }
                if (root) {
                    if (root.left === node) {
                        root.left = newRoot;
                    } else {
                        root.right = newRoot;
                    }
                } else {
                    this.root = newRoot;
                }
                return node;
            } else if (node.value > val) {
                root = node;
                node = node.left;
            } else {
                root = node;
                node = node.right;
            }
        }
    }

    printLevelOrder() {
        let levels = [];
        let q = new Queue();
        let nextQ = new Queue();

        q.enqueue(this.root);

        while(!q.isEmpty()) {
            let cur = q.dequeue();
            levels.push(cur.value);

            if (cur.left) { nextQ.enqueue(cur.left); }
            if (cur.right) { nextQ.enqueue(cur.right);}
            if (q.isEmpty()) {
                console.log(levels.join(", "));
                levels = [];
                q = nextQ;
                nextQ = new Queue();
            }
        }
    }
}

module.exports = BST;

/* TEST */
// let t = new BST();
// t.addNode(10);
// t.addNode(8);
// t.addNode(12);
// t.addNode(6);
// t.addNode(11);
// t.addNode(9);
// console.log(t.printLevelOrder());
// t.removeNode(8);
// console.log(t.printLevelOrder());
// t.addNode(4);
// console.log(t.printLevelOrder());

