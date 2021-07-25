class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

function reverse(node, prev=null) {
    if (node == null) {
        return prev;
    }
    let tmp = node.next;
    node.next = prev;
    return reverse(tmp, node);
}


var node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
node.next.next.next = new Node(4);
node.next.next.next.next = new Node(5);
var head = new Node(0);
head.next = node;
console.log(reverse(head));