let LinkedList = require('./linkedList');

function findSum(node1, node2, carry = 0, result=new LinkedList()) {
    if (!(node1 || node2 || carry)) { return null;}
    let sum = carry;
    sum += node1 ? node1.value : 0;
    sum += node2 ? node2.value : 0;
    if (sum >= 10) {
        result.append(parseInt(sum%10));
        findSum(node1.next, node2.next, 1, result);
    } else {
        result.append(sum);
        findSum(node1.next, node2.next, 0, result);
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

const sum = findSum(l.head, l1.head); 
console.log(JSON.stringify(sum.toArray()) === JSON.stringify([2,1,9]));