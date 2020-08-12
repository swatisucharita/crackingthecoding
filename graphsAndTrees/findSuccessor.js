class BSTp {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function findSuccessor(node){
    let successor = null;
    if (node.right) {
        successor = node.right;
        while(successor.left) {
            successor = successor.left;
        }
    } else if (node.parent) {
        while(node.parent && !successor) {
            if (node.parent.left === node) {
                successor = node.parent;
            }
            node = node.parent;
        }
    }
    return successor;
}

var a = new BSTp(10);
var b = new BSTp(2);
var c = new BSTp(3);
var d = new BSTp(4);
var e = new BSTp(6);
var f = new BSTp(5);
var g = new BSTp(7);

a.left = b; b.parent = a;
b.right = c; c.parent = b;
c.right = d; d.parent = c;
d.right = e; e.parent = d;
e.left = f; f.parent = e;
e.right = g; g.parent = e;

console.log(findSuccessor(f).value === 6);
console.log(findSuccessor(g).value === 10);