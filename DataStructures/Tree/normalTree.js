class TreeNode {
    constructor(value) {
        this.value = value
        this.children = []
    }
    addChild(child) {
        this.children.push(child)
    }
    removeChild(removeChild) {
        this.children = this.children.filter((child) => child !== removeChild)
    }
}
class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue)
    }
    traverseDfs(node = this.root, callback) {
        if (typeof callback !== 'function') {
            throw new TypeError('Callback must be a function');
        }
        callback(node);
        node.children.forEach(child => this.traverseDfs(child, callback));
    }

    // Breadth-First Search (BFS) Traversal
    traverseBfs(callback) {
        if (typeof callback !== 'function') {
            throw new TypeError('Callback must be a function');
        }
        let queue = [this.root];
        while (queue.length) {
            let currNode = queue.shift();
            callback(currNode);
            currNode.children.forEach(child => queue.push(child));
        }
    }
}
const tree = new Tree("Root");
const child1 = new TreeNode("Child1");
const child2 = new TreeNode("Child2");
const grandchild1 = new TreeNode("GrandChild1");
const grandchild2 = new TreeNode("GrandChild2");

tree.root.addChild(child1);
tree.root.addChild(child2);
child1.addChild(grandchild1);
child1.addChild(grandchild2);

console.log("DFS Traversal:");
tree.traverseDfs(node => console.log(node.value));
tree.traverseBfs(node => console.log(node.value));
