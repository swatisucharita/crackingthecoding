// Requirement
// 3 stacks in one array
// stack1: 0 - middle bottom
// stack2: middle bottom - middle top
// stack3: middle top - array length

class ThreeInOne {
    constructor() {
        this.container = [];
        this.middleBottom = 0;
        this.middleTop = 0;
    }
}

ThreeInOne.prototype.push1 = function (item) {
    this.container.unshift(item);
    this.middleBottom++;
    this.middleTop++;
}
ThreeInOne.prototype.push2 = function (item) {
    this.container.splice(this.middleTop, 0, item);
    this.middleTop++;
}
ThreeInOne.prototype.push3 = function (item) {
    this.container.push(item);
}
ThreeInOne.prototype.pop1 = function () {
    if (this.isEmpty1()){
        return null;
    }

    const poped = this.container.shift();
    if (this.middleBottom > 0) {
        this.middleBottom--;
        this.middleTop--;
    }

    return poped;
}
ThreeInOne.prototype.pop2 = function () {
    if (this.isEmpty2()) { return null;}

    const popped = this.container.splice(this.middleTop-1, 1);
    this.middleTop--;
    return popped;
}
ThreeInOne.prototype.pop3 = function () {
    if (this.isEmpty3()) { return null;}

    return this.container.pop();
}
ThreeInOne.prototype.peek1 = function () {
    return this.isEmpty1() ? undefined : this.container[0];
}
ThreeInOne.prototype.peek2 = function () {
    return this.isEmpty2() ? undefined : this.container[this.middleTop-1];
}
ThreeInOne.prototype.peek3 = function () {
    return this.isEmpty3() ? undefined : this.container[this.container.length -1];
}
ThreeInOne.prototype.isEmpty1 = function () {
    return this.middleBottom <= 0;
}
ThreeInOne.prototype.isEmpty2 = function () {
    return this.middleBottom === this.middleTop;
}
ThreeInOne.prototype.isEmpty3 = function () {
    return this.middleTop === this.container.length;
}

/* TEST */
var t = new ThreeInOne();
t.push1("1a");
t.push2("1b");
t.push3("1c");
t.push1("2a");
t.push2("2b");
console.log(JSON.stringify(t.container) === JSON.stringify(["2a", "1a", "1b", "2b", "1c"]));
console.log(t.middleBottom === 2);
console.log(t.middleTop === 4);
console.log(t.container.length === 5);
console.log(t.peek1() === "2a");
console.log(t.peek2() === "2b");
console.log(t.peek3() === "1c");

console.log(t.isEmpty1() === false);
console.log(t.isEmpty2() === false);
console.log(t.isEmpty3() === false);

t.pop3();
console.log(t.isEmpty3() === true);


