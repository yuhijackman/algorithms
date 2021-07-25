class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (current.value === value) return undefined;
                if (current.value < value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right
                    }
                } else if (current.value > value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left
                    }
                }
            }
        }
    }

    find(value) {
        if (this.root === null) return undefined;
        var current = this.root
        var found = false;
        while (current && !found) {
            if (current.value > value) {
                current = current.left
            } else if (current.value < value){
                current = current.right
            } else {
                found =  true;
            }
        }
        if (!found) return undefined;
        return current;
    }
}

var tree = new BinarySearchTree();
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)