const BST = require('./BST');

var findSequences = function(bst) {
    var sequences = [];
    var recurse = function(nodes, travelled) {
      var noChild = true;
      nodes.forEach((node) => {
        if (node.left !== null && travelled[node.left.value] === undefined) {
          noChild = false;
          travelled[node.left.value] = true;
          recurse(nodes.concat([node.left]), travelled);
          delete travelled[node.left.value];
        }
        if (node.right !== null && travelled[node.right.value] === undefined) {
          noChild = false;
          travelled[node.right.value] = true;
          recurse(nodes.concat([node.right]), travelled);
          delete travelled[node.right.value];
        }
      });
      if (noChild) {
        sequences.push(nodes.map(node => node.value));
      }
    };
    var startTravelled = {};
    startTravelled[bst.value] = true;
    recurse([bst], startTravelled);
    return sequences;
  };

/* TEST */
let bst = new BST();
[10,8,12,7,9,11,13].forEach(n => bst.addNode(n));
findSequences(bst.root);