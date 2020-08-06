let LinkedList = require('./linkedList');

function createPartition(list, partition) {
    let left = new LinkedList(),
      mid = new LinkedList(),
      right = new LinkedList();

    let node = list.head;

    while(node) {
        if (node.value < partition) {
            left.append(node.value);
        } else if (node.value > partition) {
            right.append(node.value);
        } else {
            mid.append(node.value);
        }
        node = node.next;
    }

    left.tail.next = mid.head;
    mid.tail.next = right.head;

    return left;
}

/* TEST */
let l = new LinkedList();
l.append(3);
l.append(5);
l.append(8);
l.append(5);
l.append(10);
l.append(2);
l.append(1);
const result = createPartition(l, 5);
console.log(JSON.stringify(result.toArray()) === JSON.stringify([3,2,1,5,5,8,10]));