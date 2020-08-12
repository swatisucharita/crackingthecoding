const BST = require("./BST");
const Queue = require("../stacksQueues/queue");
const LinkedList = require("../linkedlist/linkedList");

function listLevels(bst) {
    let levels= [];
    let q = new Queue();
    let nextQ = new Queue();
    q.enqueue(bst.root);
    let list = new LinkedList()

    while(!q.isEmpty()){
        const cur = q.dequeue();
        list.append(cur.value);

        if (cur.left) {
            nextQ.enqueue(cur.left);
        }

        if (cur.right) {
            nextQ.enqueue(cur.right);
        }

        if (q.isEmpty()) {
            levels.push(list);
            list = new LinkedList();
            q = nextQ;
            nextQ = new Queue();
        }
    }

    return levels;
}

/* TEST */
const bst = new BST();
bst.addNode(4);
bst.addNode(3);
bst.addNode(5);
bst.addNode(6);
bst.addNode(7);
bst.addNode(2);
bst.addNode(1);
console.log(bst.printLevelOrder());
console.log(listLevels(bst));