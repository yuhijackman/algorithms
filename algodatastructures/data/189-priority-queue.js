// Priority Queue
/// A data structure where each element has a priority.
// Elements with higher priorities are served before elements with lower priorities

// Naive Version
// Use a list to store all elements
// Iterate over the entire thing to find the highest priority element

// Use MinHeap
class Node {
  constructor(value, priority)  {
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.value = []
  }
  dequeue() {
    const top = this.value[0]
    const bottom = this.value.pop()
    if (this.value.length > 0) {
      this.value[0] = bottom
      this.sinkDown()
    }
    return top
  }
  sinkDown() {
    let idx = 0
    let element = this.value[idx]
    const length = this.value.length
    while (true) {
      let lidx = 2 * idx + 1
      let ridx = 2 * idx + 2
      let swapIdx = null
      let lchild, rchild
      if (lidx < length) {
        lchild = this.value[lidx]
        if (lchild.priority < element.priority) {
          swapIdx = lidx
        }
      }
      if (ridx < length) {
        rchild = this.value[ridx]
        // swap with a node which has the highest priority
        if (
            (swapIdx === null && rchild.priority < element.priority) || (swapIdx !== null && rchild.priority < lchild.priority) 
        ) {
          swapIdx = ridx
        }
      }
      if (swapIdx === null) break
      this.value[idx] = this.value[swapIdx]
      this.value[swapIdx] = element
      idx = swapIdx
    }
    return this.value
  }
  enqueue(val, priority) {
    const newNode = new Node(val, priority)
    this.value.push(newNode)
    if (this.value.length === 1) return this.value
    this.bubbleUp()
    return this.value
  }
  bubbleUp() {
    let idx = this.value.length - 1
    let element = this.value[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
    	let parent = this.value[parentIdx]
      if (parent.priority > element.priority) {
        this.value[idx] = parent
        this.value[parentIdx] = element
        idx = parentIdx
      } else {
        break
      }
    }
    return this.value
  }
}
const qu = new PriorityQueue()
qu.enqueue(2, 1)
qu.enqueue(3, 1)
qu.enqueue(4, 2)
qu.enqueue(5, 3)
qu.enqueue(6, 3)
qu.enqueue(7, 1)
qu.dequeue()
qu.dequeue()
qu.dequeue()
qu.dequeue()
qu.dequeue()
qu.dequeue()
qu.dequeue()
console.log(qu.value)