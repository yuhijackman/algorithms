// What a binary heap is
// Very similar to a binary search tree, but with some diffferent rules
// useful data structures for sorting, and implementing other data structures like priority queues
// Two types : MaxBinary Heap and MinBinary Heap
// Big O of Binary Heaps
// Insertion - O (log N) 
// Deletion - O (log N)
    // Ex) 16 elements
    // two to what power gives us 16:  2 ^ n = 16
    // 4 comparison 2 ^ 4 = 16
    // 32 elements
    // two to what power gives us 32:  2 ^ n = 32
    // 5 comparison 2 ^ 5 = 32
// Search - O (N)
// Cuz could be anywhere


// In a MaxBinaryHeap, parent nodes are always largen than child nodes.
            //     41
            //    /   \
            //   39   33
            //   / \   |
            // 18  27  12
            // Binary Search Tree
            //     33
            //    /   \
            //   18    41
            //   / \   |
            // 12  27  39
// Rules:
// Each parent has at most two nodes
// The value of each parent node is always greater than its child nodes
// In a max binary heap the parent is greater than the children, but there are no gurantees between sibling nodes.
// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first


// In a MinBinaryHeap, parent nodes are always smaller than child nodes.
            //      1
            //    /   \
            //   2      3
            //  / \     | \
            // 17  19  36  7
            // ]\
            // 25 100

// Why do we need to know this?
// Binary heaps are used to implement Priority Queues, which are very commonly used data structures



// You can implement Heap with Array
[100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4]
//  0    1  2   3    4   5  6  7   8  9  10  11  12 13 14  15
//    100(0) l child= 1, r child = 2
//    19(1) l child= 3, r child = 4
//    36(2) l child= 5, r child = 6
//    17(3) l child= 7, r child = 8
            //      100
            //    /   \
            //   19    36
            //  / \     |  \
            // 17  12   25     5
            // ] \  |\   |\   \ |
            //9  15 6 11 13 8  1 4
            // if you insert 500
            //  [500, 100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4]
            //  0    1     2   3    4   5  6  7   8  9  10  11  12 13 14  15
             //      500
            //    /   \
            //   100    36
            //  / \     |  \
            // 19  12   25     5
            // ] \  |\   |\   \ |
            //17  15 6 11 13 8  1 4
            //|
            // 9

// How you can get children of a specific parent node?
// left child = (the index of the parent * 2 + 1)  2n + 1
// right child = (the index of the parent * 2 + 2) 2n + 2
// If parent index is 0, Left child index is index 0 * 2 + 1 = 1,  right child index is 0 * 2 + 2 = 2 
// If parent index is 1, Left child index is index 1 * 2 + 1 = 3,  right child index is 1 * 2 + 2 = 4
// If parent index is 2, Left child index is index 2 * 2 + 1 = 5,  right child index is 2 * 2 + 2 = 6

// What if we have a child node? Can you find its parent?
// (n-1) / 2 Flored
// Node(Index)
// n % 2 === 0 ? n / 2 - 1 : n / 2
// 15(8)'s parent is 17(3)
// (8 / 2) - 1 = 3.
// 6(9)'s parent is 12(4)
// Math.ceil(9 / 2) = 4.
// 8(12)'s parent is 25(5)
// (12 / 2) - 1 = 5.
// 1(13)'s parent is 5(6)
// Math.ceil(13 / 2) = 6.
// 4(14)'s parent is 5(6)
// (14 / 2) - 1 = 6.

//
class MaxBinaryHeap {
  constructor() {
    this.value = [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4]
  }
  //  item=500
  // 500
  insert(item) {
    this.value.push(item)
    let i = this.value.length -1
    const target = this.value[i]
    while (i > 0) {
      let parentIndex = this.getParentIndex(i)
      let parent = this.value[parentIndex]
      if (parent>=target) break
      this.value[i] = parent
      this.value[parentIndex] = target
      i = parentIndex
    }
    return this.value
  }
  // Remove the root
  // Replace with the most recently added 
  // Adjust(Sink down)
  extracMax() {
    const max = this.value[0]
    const latest = this.value.pop()
    if (this.value.length > 0) {
      this.value[0] = latest
      this.sinkDown()
    }
    return max
  }
  sinkDown() {
    let index = 0 
    const element = this.value[index]
    const length = this.value.length
    while (true) {
      let lidx = 2 * index + 1
      let ridx = 2 * index + 2
      let swap = null
      let leftChild, rightChild
      if (lidx < length) {
        leftChild = this.value[lidx]
        if (leftChild > element) {
          swap = lidx
        }
      }
      if (ridx < length) {
        rightChild = this.value[ridx]
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = ridx
        }
      }
      if (swap === null) break
      this.value[index] = this.value[swap]
      this.value[swap] = element
      index = swap
    }
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) /2)
  }
}
const bh = new MaxBinaryHeap()
bh.insert(500)
bh.extracMax(50)
console.log(bh.value)
