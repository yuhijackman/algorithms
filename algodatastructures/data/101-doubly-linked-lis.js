// Doubly Linked List
// Prepend O(1)
// Append O(1)
// Lookup O(n) (O(n/2))
// Insert O(n) 
// Delete O(n)
class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    }
    this.tail = this.head
    this.length = 1
    return this
  }
  append(value) {
    const newNode = new Node(value)
    newNode.previous = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.previous = newNode
    this.head = newNode
    this.length++
    return this
  }
  insert(index, value) {
    if (index >= this.length) {
      this.append(value)
      return this
    }
    const newNode = new Node(value)
    const leading = this.traverseToIndex(index)
    leading.previous.next = newNode
    newNode.previous = leading.previous
    newNode.next = leading
    leading.previous = newNode
    this.length++
    return this
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next
      this.head.previous = null
      this.length--
      return this
    }
    const leading = this.traverseToIndex(index)
    leading.next.previous = leading.previous
    leading.previous.next = leading.next
    this.length--
    return this
  }
  traverseToIndex(index) {
    let target = {}
    if (index >= Math.ceil(this.length / 2)) {
      target = this.traverseBackward(index)
    } else {
      target = this.traverseForward(index)
    }
    return target
  }
  traverseBackward(index) {
    let current = this.tail
    let counter = this.length - 1 
    while (index !== counter) {
      current = current.previous
      counter--
    }
    return current
  }
  traverseForward(index) {
    let current = this.head
    let counter = 0
    while (index !== counter) {
      current = current.next
      counter++
    }
    return current
  }
  printList() {
    const array = []
    let current = this.head
    while (current !== null) {
      array.push(current.value)
      current = current.next
    }
    return array
  }
}

const linkedList = new DoublyLinkedList(1)
// 1 -> 2
linkedList.append(2)
linkedList.append(5)
linkedList.prepend(15)
linkedList.prepend(8)
linkedList.insert(2, 9)
linkedList.remove(0)
linkedList.printList()  // [15, 9, 1, 2, 5 ]
linkedList.remove(3)
linkedList.printList()  // [15, 9, 1, 5 ]


// Single VS Double
// Single: Simple, less memory. Cons: cannot go backward
// Double: Go both backward and forward. Cons: Complicated, more memory, extra operation for insertion and deletion