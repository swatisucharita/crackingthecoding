// SetOfStacks:
// Requirement
// Create a new stack when one stack exceeds the threshold size.
// From putside, it should behave like a single stack.

const Stack = require("./stack");

class SetOfStacks {
    constructor(capacity){
        this.stacks = [];
        this.capacity = capacity;
    }

    getLastStack() {
        if (this.stacks.length === 0) { return []; }
        return this.stacks[this.stacks.length - 1];
    }

    push(item) {
        const lastStack = this.getLastStack();
        if (this.stacks.length === 0 || lastStack.size() >= this.capacity) {
            const stack = new Stack();
            stack.push(item);
            this.stacks.push(stack);
        } else {
            lastStack.push(item);
        }
    }

    popAt(index) {
        const lastStack = this.getLastStack();
        if (!lastStack || lastStack.length < index+1) { return null;}

        if (this.stacks[index]) {
            return this.stacks.splice(index, 1);
        } else {
            return lastStack.splice(index, 1);
        }
    }
}

/* TEST */
let st = new SetOfStacks(3);
st.push(2);
st.push(4);
st.push(3);

console.log(st.stacks.length === 1);
st.push(5);
console.log(st.stacks.length === 2);


