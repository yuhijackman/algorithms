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
// Depth First Search
// recursive ['A', 'B', 'D', 'E', 'C', 'F']
// iterative ['A', 'C', 'E', 'F', 'D', 'B']

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
  DFS(node) {
    let result = []
    let visited = {}
    let current = node

    while (result.length < Object.keys(this.adjacencyList).length) {
      if (!(current in visited)) {
        result.push(current)
        visited[current] = true
      }
      let neighbors = this.adjacencyList[current]
      neighbors = neighbors.filter(n => !(n in visited))
      if (neighbors.length === 0) {
        current = result[result.length - 2]
      } else {
        current = neighbors[0]
      }
    }
    return result
  }
  DFS2(node) {
    const stack = [node]
    const result = []
    const visited = {}
    let current
    visited[node] = true
    while (stack.length) {
      current = stack.pop()
      result.push(current)
      
      let neighbors = this.adjacencyList[current]
      neighbors.forEach(n => {
        if (!visited[n]) {
          visited[n] = true;
          stack.push(n)
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
console.log(g.DFS2('A'))