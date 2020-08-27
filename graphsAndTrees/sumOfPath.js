class Vertex {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const sumOfValues = (arr) => arr.reduce((sum, e) => sum+e, 0);

Vertex.prototype.findPathsCount = function(value, path) {
    let count = 0;
    if (!path) {
        path = [this.value];
    } else {
        path = [...path, this.value];
    }

    if(sumOfValues(path) === value) {
        count++;
    }

    if (this.left) {
        count += this.left.findPathsCount(value, path);
    }

    if (this.right) {
        count += this.right.findPathsCount(value, path);
    }

    return count;
};

Vertex.prototype.findSumOfPath = function(value) {
    let pathsCount = 0;
    pathsCount += this.findPathsCount(value);

    if (this.left) {
        pathsCount += this.left.findPathsCount(value);
      }
      if (this.right) {
        pathsCount += this.right.findPathsCount(value);
      }
    return pathsCount;
};
/* TEST */
let a = new Vertex(1);
let b = new Vertex(1);
let c = new Vertex(1);
let d = new Vertex(10);
let e = new Vertex(2);

a.left = b;
b.left = c;
c.left = d;
d.left = e;

console.log(a.findSumOfPath(12) === 1);
console.log(a.findSumOfPath(2) === 2);