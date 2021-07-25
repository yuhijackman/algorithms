// BFS DFS 
// Which is better?
// Time Complexy = Same!!
// So how the tree is strucutured matters to determine which is better
// Very wide tree : Breadth First Search takes up more space
// Deep long tree : Depth First Search takes up more space

// Breadth First Search
// You have a lot of nodes to keep track of
// The deeper you go, the more you have to store nodes in a queue// Space Complexity


// Depth First Search
// You have fewer nodes to keep track of
// It doesn't matter how much you go deeper in terms of Space Complexity

// NOTICE!! we get all nodes in the tree in their underlying order
// Depth First Search In Order
//     10
//    /  \
//   6   15
//  / \   \
// 3  8    20
// [3, 6, 8. 10, 15, 20]

// NOTICE!!
// Depth First Search Pre Order
// can be used to export a tree structure so that it is easily copied or restructured
//     10
//    /  \
//   6   15
//  / \   \
// 3  8    20
// [10, 6, 3, 8, 15, 20]


Recap
Trees are non linear data structures that contain a root and child nodes
Binary trees can have values of any type, but at most two children for each parent
Binary Search trees are a more specific version of Binary trees where every node to the left of a parent is less than its value and every node to the right is greater
