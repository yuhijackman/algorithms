// Breadth First Search-BFS
//     10
//    /  \
//   6   15
//  / \   \
// 3  8    20

// BFS          [10,6,15,3,8,20]
// DFSPREORDER  [10,6,3,8,15,20]
// DFSINORDER   [3,6,8,8,10,15,20]  
// DFSPOSTORDER [3,8,6,20,15,10]

// Create a queue(this can be an array) and a variable to store the values of nodes visited
class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}
class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(value){
      var newNode = new Node(value);
      if(this.root === null){
          this.root = newNode;
          return this;
      }
      var current = this.root;
      while(true){
          if(value === current.value) return undefined;
          if(value < current.value){
              if(current.left === null){
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          } else {
              if(current.right === null){
                  current.right = newNode;
                  return this;
              } 
              current = current.right;
          }
      }
  }
  find(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              found = true;
          }
      }
      if(!found) return undefined;
      return current;
  }
  contains(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              return true;
          }
      }
      return false;
  }
  BFS(){}
  DFSPREORDER() {}
  DFSINORDER() {}
  DFSPOSTORDER() {}
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();