let LinkedList = require('./linkedList');

function removeDups(l) {
    if (!l) { return "linked list is required"; }
    let values = {};
    let cur = l.head;
    let prev = null;
    while(cur) {
        if (values[cur.value]) {
            let ele = cur;
            prev.next = cur.next;
            cur = cur.next;
            // ele.next = null;
            if (!prev.next) {
                l.tail = prev;
            }
        } else {
            values[cur.value] = true;
            prev = cur;
            cur = cur.next;
        }
    }
    return l;
}

let l = new LinkedList();
l.append(1);
l.append(5);
l.append(7);
l.append(1);
l.append(9);
l.append(7);
console.log(JSON.stringify(l.toArray()) === JSON.stringify([1,5,7,1,9,7]));
removeDups(l);
console.log(JSON.stringify(l.toArray()) === JSON.stringify([1,5,7,9]));
