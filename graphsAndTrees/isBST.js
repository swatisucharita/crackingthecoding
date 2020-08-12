const BST = require("./BST");

function isBST(node) {
    const {left, right, value} = node;

    if (left && right) {
        if (!(left.value < value && value < right.value)) { return false;}
    } else if (left) {
        if (left.value > value) { return false; }
    } else if (right) {
        if (value > right.value) { return false;}
    }

    let bst = true;
    if (left) {
        bst = isBST(left);
        if (!bst) { return false;}
    }

    if (right){
        bst = isBST(right);
        if (!bst) { return false; }
    }

    return bst;
}

/* TEST */
let tree = new BST();
tree.addNode(4);
tree.addNode(3);
tree.addNode(5);
tree.addNode(2);
tree.addNode(1);
tree.addNode(6);
tree.addNode(7);
console.log(isBST(tree.root) === true);