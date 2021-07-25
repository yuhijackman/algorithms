class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

function deleteNthFromEnd(list, num) {
    if (list.value == null) return  0;
    const length = countLength(list);

    let leftIndex = length - n - 1;
    if (leftIndex === 0) {
        return list.next;
    }
    let current = list;
    while (leftIndex-- > 1) {
        current = current.next
    }
    current.next = current.next.next
    return list;
}

function countLength(list) {
    let count = 0;
    let current = list
    while (current) {
        count++;
        current = current.next;
    }
    return count;
}

var node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
node.next.next.next = new Node(4);
node.next.next.next.next = new Node(5);
var head = new Node(0);
head.next = node;
deleteNthFromEnd(head, 0);