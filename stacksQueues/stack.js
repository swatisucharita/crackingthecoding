// Requirement
// push // pushes on top
// pop // pops from top
// peek // returns the top
// isEmpty // checks if it is empty

class Stack {
    constructor() {
        this._items = [];        
    }

    push(item) {
        this._items.push(item);
        return this._items;
    }

    pop() {
        return this._items.pop();
    }

    peek() {
        if (this.isEmpty()) { return null;}
        return this._items[this._items.length - 1];
    }

    isEmpty() {
        return this._items.length <= 0;
    }

    toArray() {
        return this._items;
    }

    size() {
        return this._items.length;
    }
}

module.exports = Stack;

/* TEST */

// var s = new Stack();
// console.log(s.isEmpty() === true);
// console.log(s.peek() === null);
// console.log(JSON.stringify(s.toArray()) === JSON.stringify([]));
// s.push('a');
// s.push('b');
// s.push('c');

// console.log(s.peek() === 'c');
// console.log(s.isEmpty() === false);
// console.log(JSON.stringify(s.toArray()) === JSON.stringify(['a', 'b', 'c']));
// console.log(s.pop() === 'c');
// console.log(s.pop() === 'b');
// console.log(s.pop() === 'a');
// console.log(s.isEmpty() === true);
// console.log(s.peek() === null);
// console.log(JSON.stringify(s.toArray()) === JSON.stringify([]));

