let LinkedList = require('./linkedList');

function checkPalindrome(list) {
    let reversed = new LinkedList();
    let node = list.head;
    let isPalindrome = true;
    while(node) {
        reversed.prepend(node.value);
        node = node.next;
    }

    node = list.head;
    let node2 = reversed.head;
    while(node2) {
        if (node.value !== node2.value) { isPalindrome = false; }
        node2 = node2.next;
        node = node.next;
    }
    
    return isPalindrome;
}

/* TEST */
let l = new LinkedList();
l.append("a");
l.append("b");
l.append("c");
l.append("d");
l.append("c");
l.append("b");
l.append("a");
console.log(checkPalindrome(l) === true);
l = new LinkedList();
l.append("a");
l.append("b");
l.append("c");
l.append("c");
l.append("b");
l.append("a");
console.log(checkPalindrome(l) === true);
l = new LinkedList();
l.append("a");
l.append("b");
l.append("c");
l.append("d");
l.append("e");
l.append("c");
l.append("b");
l.append("a");
console.log(checkPalindrome(l) === false);