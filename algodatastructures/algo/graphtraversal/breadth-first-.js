// Graph Traversals use
// Peer to peer networking
// Web crawlers
// Finding Closest matches/recommendations
// Shortest path problems
// GPS Navigation
// Solving mazes
// Shortest path to win


const graph = {
  "A": ["B", "C"],
  "B": ["A", "D"],
  "C": ["A", "E"],
  "D": ["B", "E", "F"],
  "E": ["C",  "D", "F"],
  "F": ["D", "E"],
}

//         A
//       /   \
//      B     C
//      |     | 
//      D  -  E
//       \   /
//         F 
// Breadth First Search
// [A, B, C, D, E, F]
// Visit every neighbor before go deeper

class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  // accepts a name of a vertex
  // add a key to the adjacency List with the name set its value to be an empty array
  addVertex(vertex) {
    this.adjacencyList[vertex] = []
    return this.adjacencyList
  }
  // accepts two vertecies
  // find the vertex in the adjcancey list and push it to the array
  addEdge(vertex1, vertex2) {
    if (vertex1 in this.adjacencyList && vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
    }
    return this.adjacencyList
  }
  BFS(start) {
    let queue = [start]
    let visited = {}
    let result = []
    let current
    visited[start] = true
    while (queue.length) {
      current = queue.shift()
      result.push(current)
      this.adjacencyList[current].forEach(neigh => {
        if (!visited[neigh]) {
          visited[neigh] = true
          queue.push(neigh)
        }
      })
    }
    return result
  }
}

const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
console.log(g.BFS('A'))