let Stack = require('./stack');

class Queue {
    constructor() {
        this.mainStack = new Stack();
        this.auxStack = new Stack();
    }

    enqueue(item) {
        return this.mainStack.push(item);
    }

    dequeue() {
        while(this.mainStack.size() > 1) {
            const item = this.mainStack.pop();
            this.auxStack.push(item);
        }

        const popped = this.mainStack.pop();

        while(this.auxStack.size() > 0) {
            const item = this.auxStack.pop();
            this.mainStack.push(item);
        }

        return popped;
    }
}


/* TEST */
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue() === 1);
console.log(q.dequeue() === 2);
console.log(q.dequeue() === 3);
