// Undirected Graph

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
  // O(|V|, |E|)
  removeEdge(vertex1, vertex2) {
    if (vertex1 in this.adjacencyList && vertex2 in this.adjacencyList) {
      // this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex2), 1)
      // this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1), 1)
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }
    return this.adjacencyList
  }
  // accept a vertex to remove
  // delete the vertex from the arrays which have the vertex
  removeVertex(vertex) {
    const targetVertecies = this.adjacencyList[vertex]
    for (let tv of targetVertecies) {
      this.removeEdge(vertex, tv)
    }
    delete this.adjacencyList[vertex]
  }
}

const g = new Graph()
g.addVertex('Tokyo')
g.addVertex('London')
g.addVertex('Tokyo')
g.addVertex('Toronto')
g.addEdge('Tokyo', 'London')
g.addEdge('Tokyo', 'Toronto')
g.addEdge('London', 'Toronto')
g.removeVertex('Tokyo')
console.log(g)