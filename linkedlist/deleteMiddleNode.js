let LinkedList = require('./linkedList');

function deleteMiddleNode(list, value) {
    if (!(list.head && list.head.next)) { return null;}
    let node = list.head.next;
    let prev = list.head;
    while(node && node.next) {
        console.log(node.value, value);
        if (node.value === value) {
            console.log("Value matches", node.next);
            let elem = node;
            prev.next = node.next;
            elem.next = null;
            node = node.next;
        } else {
            node = node.next;
            prev = node; 
        }
    }

    return list;
}

/* TEST */
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
console.log(JSON.stringify(list.toArray()));
deleteMiddleNode(list, 4);
console.log(JSON.stringify(list.toArray()));