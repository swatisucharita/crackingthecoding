let LinkedList = require('./linkedList');

function kthToLast(list, k, index=0) {
    let node = list.head;
    if (index < k && node.next) {
        list.head = node.next;
        kthToLast(list, k, index+1);
    } else {
        return list;
    }
}

/* TEST */
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);
list.append(10);
kthToLast(list, 5);
console.log(JSON.stringify(list.toArray()) === JSON.stringify([6,7,8,9,10]));
