// requirement
// Find minimum value on one rotation

var Stack = require('./stack');

class StackMin extends Stack {
    constructor() {
        super();
        this._min = null;
    }

    push(ele) {
        if (this._min === null) {
            this._min = ele;
        }

        if (ele < this._min) {
            this._min = ele;
        }

        super.push(ele);
    }

    min() {
        return this._min;
    }
}

let s = new StackMin();
s.push(2);
s.push(5);
s.push(1);
s.push(7);
console.log(s.min() === 1);
s.push(0);
console.log(s.min() === 0);