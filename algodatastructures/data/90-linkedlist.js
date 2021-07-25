// Why Linked List
// Prepend O(1)
// Append O(1)
// Lookup O(n)
// Insert O(n) because you have to go from the head or tail one by one to the target.
// Delete O(n)
// Fast Insertion Fast Deletion Ordered Flixible Size 
// Slow Lookup  More Memory
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class  LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }
  insert(index, value) {
    if (index >= this.length) {
      this.append(value)
    }
    const leader = this.traverseToIndex(index - 1)
    const newNode = new Node(value)
    newNode.next = leader.next
    leader.next = newNode
    this.length++
    return this
  }
  remove(index) {
    if (index >= this.length) return 'Error'
    if (index === 0) {
      this.head = this.head.next
    } else {
      const leader = this.traverseToIndex(index - 1)
      leader.next = leader.next.next
    }
    this.length--
    return this
  }
  traverseToIndex(index) {
    let count = 0
    let current = this.head
    while(count !== index) {
      current = current.next
      count++
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
  reverse() {
    if (!this.head.next) {
      return this.head
    }
    let first = this.head
    this.tail = this.head
    let second = first.next
    while(second) {
      const temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null
    this.head = first
    return this
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(15)
myLinkedList.append(35)
myLinkedList.prepend(335)
myLinkedList.insert(2,12)
myLinkedList.insert(1,32)
myLinkedList.printList() // [ 335, 32, 10, 12, 5, 15, 35 ]
myLinkedList.remove(5)
myLinkedList.printList() // [ 335, 32, 10, 12, 5, 35 ]
myLinkedList.reverse()
myLinkedList.printList() // [35, 5, 12, 10, 32, 335]
