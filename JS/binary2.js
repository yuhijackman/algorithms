class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree {
    constructor() {
        this.root = null
    }

    getRoot() {
        return this.root;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (current.value === value) return undefined;

                if (current.value > value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } 
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    find(target) {
        if (!this.root) return undefined;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (current.value > target) {
                current = current.left
            } else if (current.value < target) {
                current = current.right
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    BFS() {
        let node = this.root;
        let queue = [];
        let result = [];
        queue.push(node);

        while (queue.length) {
            let current = queue.shift();
            result.push(current.value);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return result;
    }

    DFS() {
        let root = this.root;
        let result = [];
        
        function traverse(node) {
            if (!node) return;
            result.push(node.value);
            traverse(node.left);
            traverse(node.right);
        }

        traverse(root);
        return result;
    }

    levelOrder() {
        let root = this.root;
        if (!root) return [];
        let queue = [root];
        let levels = []; 
        while (queue.length) {
            let currentLevels = [];
            let size = queue.length;
            while (size) {
                let current = queue.shift();
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
                currentLevels.push(current.value);
                size--;
            }
            levels.push(currentLevels);
        }
        return levels;
    }

    maxDepth(root) {
        if (!root) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }

    validateBST(root, min, max) {
        if (!root) return true;
        if (root.value >= max || root.value <= min) return false;
        return this.validateBST(root.left, min, root.value) && this.validateBST(root.right, root.value, max);
    }

    balancedTree(root) {
        if (!root) return true;
        let left = this.maxDepth(root.left);
        let right = this.maxDepth(root.right);
        let balanced = Math.abs(left - right) <= 1;
        return balanced && balancedTree(root.left) && balancedTree(root.right);
    }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.find(8);
console.log(tree.DFS());
console.log(tree.levelOrder());
console.log(tree.maxDepth(tree.getRoot()));
console.log(tree.validateBST(tree.getRoot(), Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));