class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        if (!value) { return "value required";}
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
        return;
    }
 
    prepend(value) {
        if (!value) { return "value required";}
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        node.next = this.head;
        this.head = node;
        return;
    }

    pop() {
        if (!this.head) { return null; }
        if (!this.head.next) { 
            const cur = this.head;
            this.head = null; 
            this.tail = null;
            return cur;
        }

        let node = this.head;
        while(node.next.next) {
            node = node.next;
        }

        const last = node.next;
        node.next = null;
        this.tail = node;
        return last.value;
    }

    toArray() {
        let node = this.head;
        let result = [];
        while(node) {
            result.push(node.value);
            node = node.next;
        }

        return result;
    }
}

module.exports = LinkedList;

/* TEST */
// let l = new LinkedList();
// l.append(1);
// l.append(2);
// l.append(3);

// console.log(JSON.stringify(l.toArray()) === JSON.stringify([1,2,3]));
// console.log(l.pop() === 3);
// console.log(JSON.stringify(l.toArray()) === JSON.stringify([1,2]));

