class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Method to insert a new value into the tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to insert a new node in the correct place
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // In-order traversal (Left, Root, Right)
    inOrderTraversal(node = this.root, callback) {
        if (node !== null) {
            this.inOrderTraversal(node.left, callback);
            callback(node.value);
            this.inOrderTraversal(node.right, callback);
        }
    }

    // Pre-order traversal (Root, Left, Right)
    preOrderTraversal(node = this.root, callback) {
        if (node !== null) {
            callback(node.value);
            this.preOrderTraversal(node.left, callback);
            this.preOrderTraversal(node.right, callback);
        }
    }

    // Post-order traversal (Left, Right, Root)
    postOrderTraversal(node = this.root, callback) {
        if (node !== null) {
            this.postOrderTraversal(node.left, callback);
            this.postOrderTraversal(node.right, callback);
            callback(node.value);
        }
    }

    // Breadth-First Search (BFS) Traversal
    bfs(callback) {
        if (typeof callback !== 'function') {
            throw new TypeError('Callback must be a function');
        }
        if (this.root === null) return;

        let queue = [this.root]; // Initialize the queue with the root node

        while (queue.length > 0) {
            let node = queue.shift(); // Dequeue the front node
            callback(node.value); // Process the current node
            if (node.left !== null) queue.push(node.left); // Enqueue left child
            if (node.right !== null) queue.push(node.right); // Enqueue right child
        }
    }

    // Display the tree structure
    display() {
        const result = [];
        this.inOrderTraversal(this.root, value => result.push(value));
        console.log("In-order traversal:", result);
        result.length = 0;
        this.preOrderTraversal(this.root, value => result.push(value));
        console.log("Pre-order traversal:", result);
        result.length = 0;
        this.postOrderTraversal(this.root, value => result.push(value));
        console.log("Post-order traversal:", result);
        result.length = 0;
        this.bfs(value => result.push(value));
        console.log("BFS traversal:", result);
    }
}

// Usage example
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

tree.display();
