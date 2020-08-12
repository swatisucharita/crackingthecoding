const BST = require("./BST");
const buildBalancedBST = require("./minimalBST");

function isBalanced(node) {
    const { left, right } = node;
    if ((left && !right) || (right & !left)) {
        return false;
    }

    let balanced = true;
    if (left) {
        balanced = isBalanced(left);
        if (!balanced) { return false;}
    }

    if (right) {
        balanced = isBalanced(right);
        if (!balanced) { return false;}
    }

    return balanced;
}

/* TEST */
const tree = new BST();
tree.addNode(4);
tree.addNode(3);
tree.addNode(5);
tree.addNode(2);
tree.addNode(1);
tree.addNode(6);
tree.addNode(7);
console.log(isBalanced(tree.root) === false);

const bst1 = buildBalancedBST([1,2,3,4,5,6,7]);
console.log(isBalanced(bst1.root) === true);
