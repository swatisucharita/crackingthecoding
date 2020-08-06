
let LinkedList = require('./linkedList');

function findNumber(list) {
    let i = 0;
    let node = list.head;
    let num = 0;

    while(node) {
        num += node.value * Math.pow(10, i);
        i++;
        node = node.next;
    }

    return num;
}

function findSum(list1, list2) {
    let num1 = findNumber(list1);
    let num2 = findNumber(list2);

    let total = num1 + num2;
    const resLen = total.toString().length;
    let weight = Math.pow(10, resLen -1);

    let result = new LinkedList();
    while (weight >= 1) {
        const val = parseInt(total/weight, 10);
        result.prepend(val);
        total = total % weight;
        weight = weight/10;
    }

    return result;
}

/* TEST */
let l = new LinkedList();
l.append(7);
l.append(1);
l.append(6);

let l1 = new LinkedList();
l1.append(5);
l1.append(9);
l1.append(2);

const sum = findSum(l, l1); 
console.log(JSON.stringify(sum.toArray()) === JSON.stringify([2,1,9]));