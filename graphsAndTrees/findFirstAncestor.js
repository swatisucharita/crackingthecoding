const Tree = require('./BST');

function findNodeDirection(root, node1, node2) {
    let dir1 = '', dir2 = '';
    if (root.left && root.right) {
        findNodeDirection(root)
    }
}

function findFirstAncestor(root, node1, node2) {
    let ancestor = null;
    const [side1, side2] = findNodeDirections(root, node1, node2);
    if (side1 !== side2) {
        ancestor = root.value;
    } else {
        findFirstAncestor(root[side1]);
    }

    return ancestor;
}

/* TEST */
let t = new Tree();
[4,2,6,1,3,5,7].forEach(n => t.addNode(n));
console.log(findFirstAncestor(t.root, 1, 5))