const buildBalancedBST = require('./minimalBST');

function addUpNodes(node, baseValue=0) {
   console.log(baseValue);
    if (!node) { return null; }
    if (node) {
        if (node.right) {
            baseValue = baseValue + node.right.value;
            addUpNodes(node.right, baseValue);
        }

        node.value = baseValue;

        if (node.left) {
            baseValue = baseValue + node.left.value;
            addUpNodes(node.left, baseValue);
        }
    }
}


/* TEST */
const nodes = [20,30,40,50,60,70,80];
const t = buildBalancedBST(nodes);
console.log(t.printLevelOrder());
console.log(addUpNodes(t.root));
console.log(t.printLevelOrder());