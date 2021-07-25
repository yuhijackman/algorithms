// Stack with Array
let stack = []
stack.push("google")
stack.push("Instagram")
stack.push("youtube")
stack.pop()
stack.pop()
stack.pop()
// Reason why you shouldn't use unshift and shift to implement Stack with Array
// Big O = O(n)
// every time add or remove an item,you have to reindex everything in the array

// Linked List is better cuz you don't need indecies
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(item) {
    const newNode = new Node(item)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    return this
  }
  pop() {
    let node = this.first
    let tmp = null
    while (node === this.last) {
      tmp = node
      node = node.next
    }
    this.last = tmp
    return this
  }
}