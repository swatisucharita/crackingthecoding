let LinkedList = require('./linkedList');
let stack = require('../stacksQueues/stack');
const Stack = require('../stacksQueues/stack');

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findIntersection(head1, head2) {
    let stack1 = new Stack(),
        stack2 = new Stack();
    let intersection = null;

    while (head1) {
        stack1.push(head1);
        head1 = head1.next;
    }

    while(head2) {
        stack2.push(head2);
        head2 = head2.next;
    }

    if (stack1.size() === 0 && stack2.size() === 0) {
        return undefined;
    } else if (stack1.peek() !== stack2.peek()) {
        return undefined;
    } else {
        while(stack1.peek() === stack2.peek()){
            intersection = stack1.peek();
            stack1.pop();
            stack2.pop();
        }

        return intersection.value;
    }


}

/* TEST */
let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

let a1 = new Node("a1");
let b1 = new Node("b1");
let c1 = new Node("c1");

a1.next = b1;
b1.next = c1;
c1.next = d;

console.log(findIntersection(a, a1) === "d");