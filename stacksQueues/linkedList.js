// Requirement
// append: Add new Item
// pop: Removes from the end
// addAt: Adds at index
// removeAt: Removes at index
// peek: Returns the tail
// head: returns the head

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null
    }

    append(item) {
        const node = new Node(item, null);
        if (!this._head) {
            this._head = node;
            this._tail = node;
            return item;
        }

        this._tail.next = node;
        this._tail = node;
        return item;
    }

    prepend(value) {
        let node = new Node(value);
        node.next = this._head;
        this._head = node;
    }

    appendAt(index, item) {
        if (index === 0) { this.prepend(item); return true;}
        
        let node = new Node(item, null);
        let i = 0;
        let n = this._head;
        let previous = this._head;
        while (n) {
            if (i === index-1) {
                node.next = previous.next;
                previous.next = node;
                if (node.next === null) {
                    this._tail = node;
                }
                break;
            }
            i++;
            n = n.next;
            previous = n;
        }
    }

    pop() {
        if (!this._head) { return null; }

        let node = this._head;
        while(node.next.next) {
            node = node.next;
        }

        node.next = null;
        this._tail = node;
        return node;
    }

    peek() {
        return this._tail;
    }

    head() {
        return this._head;
    }

    toArray() {
        let node = this._head;
        let result = [];

        while(node) {
            result.push(node.value);
            node = node.next;
        };

        return result;
    }
}


/* TEST */

let l = new LinkedList();
l.append(23);
l.append(4);
l.appendAt(1, 45);

console.log(l.peek().value === 4)
console.log(l.head().value === 23)
console.log(l.head().next.value === 45);

l.appendAt(3,36);
console.log(l.peek().value === 36)
console.log(JSON.stringify(l.toArray()) === JSON.stringify([23,45,4,36]))

l.pop();
console.log(JSON.stringify(l.toArray()) === JSON.stringify([23,45,4]))
