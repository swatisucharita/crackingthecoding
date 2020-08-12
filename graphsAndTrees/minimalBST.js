// Minimal/ Balanced BST from array
let BST = require('./BST');
const Queue = require('../stacksQueues/queue');

function buildBalancedBST(arr) {
    // sort Array in ascending order
    arr = arr.sort((e1, e2) => e1-e2);
    let q = new Queue();
    let bst = new BST();
    q.enqueue(arr);
    while(!q.isEmpty()) {
        let cur = q.dequeue();
        let mid = Math.floor(cur.length/2);
        bst.addNode(cur[mid]);
        if (cur.slice(0, mid).length) {
            q.enqueue(cur.slice(0, mid));
        }

        if (cur.slice(mid+1).length) {
            q.enqueue(cur.slice(mid+1));
        }
    }
    return bst;
}

module.exports = buildBalancedBST;

/* TEST */
// const arr = [1,2,3,4,5,6];
// const bst = buildBalancedBST(arr);
// bst.printLevelOrder();

// // 4
// //2  5  6
// //1 3

// const arr1 = [4,5,6, 8, 9, 1, 10, 7];
// const bst1 = buildBalancedBST(arr1);
// bst1.printLevelOrder();