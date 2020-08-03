let Stack = require('./stack');

function sortStack(stack) {
    let tempStack = new Stack();
    let min = Infinity;
    let depth = 0;

    while (!stack.isEmpty()) {
        if (stack.peek() <= min) {
            if (min !== Infinity){
                tempStack.push(min);
            }
            min = stack.pop();
        } else {
            tempStack.push(stack.pop());
        }
        depth++;
    }

    while(!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }

    tempStack.push(min);
    depth--;
    min = Infinity;

    while(depth) {
        while (!stack.isEmpty()) {
            if (stack.peek() <= min) {
                if (min !== Infinity){
                    tempStack.push(min);
                }
                min = stack.pop();
            } else {
                tempStack.push(stack.pop());
            }
        }

        for (let i = 0; i<depth -1; i++) {
            stack.push(tempStack.pop());
        }
        tempStack.push(min);
        min = Infinity;
        depth--;
    }

    return tempStack.toArray();
}

/* TEST */
let st = new Stack();
st.push(9);
st.push(5);
st.push(3);
st.push(8);

console.log(JSON.stringify(sortStack(st)) === JSON.stringify([3,5,8,9]));