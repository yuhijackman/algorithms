/// Difference between linked list and tree
// linked list: One way and linear 0->1->2->3, can point to the backwards
// Tree: One entry pont and many ways, you cannot point to the backwards
// 1->3->5
//  ->4->7

// Binary Tree
// Rules: Each node has zero, one or two children and has one parent
function BinaryTreeNode(value) {
  this.value = value
  this.left = null
  this.right = null
}
// terminology
// Perfect Binary Tree: there is no node that has one child but two or zero
//                       1. number of nodes at each levele doubles as we move down the tree
//                       2. Number of nodes on the last level is equal to the sum of the number of nodes on all ther other level plus 1
//      O
//   |     |   <=  double 1node -> 2nodes
//   O     O
// |   | |   |  
// O   O O   O <=  double 2node -> 4nodes

// Full Binary Tree: Node has either 0 or one child

// Binary Search Tree
// lookup O(log N)
// insert O(log N)
// delete O(log N)

// What is O(log N)?
// level 0: 2 ^0 = 1 node; two to the power of zero
// level 1: 2 ^ 1 = 2 nodes;
// level 2: 2 ^ 2 = 4 nodes;
// level 3: 2 ^ 3 = 8 nodes;
// This means we have eight places that we need to iterate through 
// EIght nodes We need to check perhaps  to search for something
// Based on this formula we can find out the number of nodes in a tree by doing two to the power of H(Height) minus one that is the level
// # of nodes = 2 ^ h -1
// Why minus one? Look at this tree
//      O
//   |     |   <=  double 1node -> 2nodes
//   O     O
// |   | |   |  
// O   O O   O <=  double 2node -> 4nodes
// we have 7 nodes
// And Height of the tree is 3
// 2 ^ 3 = 8. SO we have to minus one from it to get the total number of the nodes
// Simplify this formula
// log nodes = height
// log 100 = 2 
// Why??
// 10 ^ 2 = 100
