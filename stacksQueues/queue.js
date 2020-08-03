// Requirement
// enqueue : enqueueed to bottom
// dequeue: dequeues from top
// peek: returns the top
// isEmpty: checks if empty
// toArray: Converts to array

class Queue {
    constructor() {
        this._items = [];
    }

    enqueue(item) {
        this._items.splice(0,0, item);
    }
    dequeue() {
        return this._items.pop();
    }
    peek() {
        if (this.isEmpty()) { return null; }
        return this._items[this._items.length - 1];
    }
    isEmpty(){
        return this._items.length <= 0;
    }
    toArray() {
        return this._items;
    }
}

module.exports = Queue;

/* TEST */

// let q = new Queue();
// console.log(q.isEmpty() === true);
// console.log(q.peek() === null);
// console.log(JSON.stringify(q.toArray()) === JSON.stringify([]));

// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');
// console.log(q.isEmpty() === false);
// console.log(q.peek() === 'a');
// console.log(JSON.stringify(q.toArray()) === JSON.stringify(['c', 'b', 'a']));
// console.log(q.dequeue() === 'a');
// console.log(q.dequeue() === 'b');
// console.log(q.dequeue() === 'c');
// console.log(q.isEmpty() === true);
// console.log(q.peek() === null);
// console.log(JSON.stringify(q.toArray()) === JSON.stringify([]));



