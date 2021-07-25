//Types of Graphs
// 1. Directed === Twitter
// 2. Undirected === FB
// 3. Weighted === MAP
// 4. Unweighted

// How I can build based on Data Structures
// There are 3 ways
// Edge List
const edge = [
  [0,2], [2,3], [2,1], [1,3]
]
//     2-----0
//     \ \
//     1- 3
//ADJACENCY LIST
// Index or key is the node(vertex)
{
  A: ["B", "F"],
  B: ["A", "C"],
  C: ["B", "D"],
  D: ["C", "E"],
  E: ["D", "F"],
  F: ["E", "A"],
}
[
  [2], // index o has 2 in the array means there's an edge from Node 0 to 2
  [2,3],
  [0,1,3]
  [1,2]
]
//     2-----0
//     \ \
//     1- 3
// 0 = no 1= yes
// index = node
const adjacentMatrix = [
  [0, 0, 1, 0], // index 2 of inside array === 1 so it means there's an edge
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0]
]
const adjacentMatrix = {
  0: [0, 0, 1, 0], // index 2 of inside array === 1 so it means there's an edge
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0]
}
//     2-----0
//     \ \
//     1- 3

//Differences And Big O
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344874#overview
// Adjacenvy List:
  // - Can take up less space
  // - Faster to iterate over all edges
  // - Can be slower to lookup specific edge
// Adjacenvy Matrix:
  // - Can take up more space
  // - Slower to iterate over all edges
  // - Faster to lookup specific edge
// |V| - Number of vetices
// |E| - Number of edges
// Add vertex
//   Adjacency List O(1),
//   Adjacency MATRIX
// Add Edge
//   Adjacency List O(1),
//   Adjacency MATRIX
// Remove Vertex
//   Adjacency List 
//   Adjacency MATRIX
// Query aka lookup like if Edge between verticies exists
//   Adjacency List O(|V|, |E|)
//   Adjacency MATRIX O(1)
// Storage
//   Adjacency List O(|V|, |E|)
//   Adjacency MATRIX O(V ^ 2)