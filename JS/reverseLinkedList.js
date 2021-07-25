class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

function reverse(head) {
    if (head.next == null) return head;
    
    let prev = null;
    let current = head;

    while (current != null) {
        let tmp = current.next;
        current.next = prev;
        
        prev = current;
        current = tmp;
    }
    head = prev;
    return head;
}


var node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
node.next.next.next = new Node(4);
node.next.next.next.next = new Node(5);
var head = new Node(0);
head.next = node;
console.log(reverse(head));