let LinkedList = require('./linkedList');
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function loopDetection(head){
    if (!(head && head.next)) { return null;}

    let slow = head;
    let fast = head;
    do {
        slow = slow.next;
        fast = fast.next;
        if (!(fast)) { return null; }
        fast = fast.next;
        console.log("Do while: ", slow, fast);
    } while(slow !== fast)
    slow = head
  
    while (fast !== slow) {
        fast = fast.next
        slow = slow.next
    }
    
    return fast
}

/* TEST */
// a -> b -> c -> d -> e -> c
let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = c;

console.log(loopDetection(a));

