class Vertex {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function moveTo(from, to, node) {
    if (from < to) { return null;}
    if (from === to){ return node; }
    while (from > to) {
        node = node.parent;
        from--;
    }
    return node;
}

function findFirstAncestor(node1, node2) {
    let level1 = findLevel(node1);
    let level2 = findLevel(node2);

    if (level1 > level2) {
        node1 = moveTo(level1, level2, node1);
    } else if (level2 > level1) {
        node2 = moveTo(level2, level1, node2)
    }

    if (node1 === node2) {
        return node1;
    }

    while (node1 && node2 && node1 !== node2) {
        node1 = node1.parent;
        node2 = node2.parent;
    }

    return node1;
    
}

function findLevel(node) {
    let level = 0;
    while (node.parent) {
        level++;
        node = node.parent;
    }
    return level;
}

/* TEST */
let a = new Vertex(1);
let b = new Vertex(2);
let c = new Vertex(3);
let d = new Vertex(4);
let e = new Vertex(5);
let f = new Vertex(10);
let g = new Vertex(12);

a.left = b; b.parent = a;
a.right = c; c.parent = a;
b.left = d; d.parent = b;
b.right = e; e.parent = b;
e.right = f; f.parent = e;
c.right = g; g.parent = c;

console.log(findFirstAncestor(f, d) === b);
console.log(findFirstAncestor(e, g) === a);