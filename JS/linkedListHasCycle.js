class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

function isCycle(head) {
    let visited = new Set();
    let current = head;

    while (current !== null) {
        if (visited.has(current)) {
            return true;
        } else {
            visited.add(current);
            current = current.next;
        }
    }
    return false;
}

function isCycleHare(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }
    return false
}


var node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
node.next.next.next = new Node(4);
node.next.next.next.next = new Node(5);
node.next.next.next.next = node.next.next;
var head = new Node(0);
head.next = node;
console.log(isCycle(head));