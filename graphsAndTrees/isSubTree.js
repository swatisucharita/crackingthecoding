const BST = require('./BST');
const Queue = require('../stacksQueues/queue');
const Stack = require('../stacksQueues/stack');

function matchTree(root1, root2) {
    let match = true;

    if (root1 && root2 && root1.value !== root2.value) { return false }
    let s1 = new Stack();
    let s2 = new Stack();
    s1.push(root1);
    s2.push(root2);
    
    while(!(s1.isEmpty() && s2.isEmpty())) {
        let node1 = s1.pop(),
          node2 = s2.pop();

        if (node1.value !== node2.value) {
            match = false; break;
        }

        node1.left && s1.push(node1.left);
        node1.right && s1.push(node1.right);

        node2.left && s2.push(node2.left);
        node2.right && s2.push(node2.right);
    }

    return match;
}

function isSubtree(T1, T2) {
    // Find root node
    const node = T1.root;
    const q = new Queue();
    let match = null;
    q.enqueue(node);

    while (!q.isEmpty()) {
        const n = q.dequeue();
        if (n.value === T2.root.value) {
            match = matchTree(n, T2.root);
            if (match) { break;}
        }
        n.left && q.enqueue(n.left);
        n.right && q.enqueue(n.right);
    }

    return !!match;
}

/* TEST */
const bst1 = new BST();
const bst2 = new BST();
const bst3 = new BST();
const bst4 = new BST();
const bst5 = new BST();
[10,8,12,7,9,11,13].forEach(n => bst1.addNode(n));
[8,7,9].forEach(n => bst2.addNode(n));
[8,7,10].forEach(n => bst3.addNode(n));
[12,11,13].forEach(n => bst4.addNode(n));
bst5.addNode(13);
console.log(isSubtree(bst1, bst2) === true);
console.log(isSubtree(bst1, bst3) === false);
console.log(isSubtree(bst1, bst4) === true);
console.log(isSubtree(bst1, bst5) === true);