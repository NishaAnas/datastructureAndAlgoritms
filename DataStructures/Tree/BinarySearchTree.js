class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class Queue{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        if(this.isEmpty()){
            return 'Queue is Empty'
        }
        return this.items.shift()
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
        if(!root){
            return 'Not Found'
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left);
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    BFSOrder(){
        //Using Optimized Queue Implementation
        const queue= new Queue()
        queue.enqueue(this.root)
        while(!queue.isEmpty()){
            let curr= queue.dequeue()
            console.log(curr.value)
            if(curr.left){
                queue.enqueue(curr.left)
            }
            if(curr.right){
                queue.enqueue(curr.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    delete(value){
         if (this.search(this.root, value) === true) {
            this.root = this.deleteNode(this.root, value);
        } else {
            console.log('Not Found');
        }
    }
    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else {
            if(!root.left && !root.right){
            return null
        }
        if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }
        root.value=this.min(root.right)
        root.right=this.deleteNode(root.right,root.value)
    }
    return root
    }
    findClosestValue(root,target){
        return this.findClosest(root,target,root.value)
    }
    findClosest(root,target,closest){
        if(root===null){
            return closest
        }
        if(Math.abs(target-closest)>Math.abs(target-root.value)){
            closest=root.value
        }
        if(target<root.value){
            return this.findClosest(root.left,target,closest)
        }else if(target>root.value){
            return this.findClosest(root.right,target,closest)
        }else{
            return closest
        }
    }
    validateBST(root,min=null,max=null){
        if(root===null){
            return true
        }
        if((min!==null&&root.value<=min)||(max!==null&&root.value>=max)){
            return false
        }
        return this.validateBST(root.left,min,root.value) && this.validateBST(root.right,root.value,max)
    }
}
const bst= new BinarySearchTree()
console.log(`Is The BST Empty:${bst.isEmpty()}`)    //true
bst.insert(10);
bst.insert(20);
bst.insert(1);
bst.insert(5);
bst.insert(30);
console.log(`Is The BST Empty:${bst.isEmpty()}`)    //false
console.log(`Is 30 present in the tree :${bst.search(bst.root,30)}`)     //true
console.log(`Is 3 present in the tree :${bst.search(bst.root,3)}`)    //Not Found
console.log(`Deapth_First_Search`);
console.log(`Pre-Order:`)
bst.preOrder(bst.root)  //10 1 5 20 30
console.log(`In-Order:`)
bst.inOrder(bst.root)   //1 5 10 20 30
console.log(`Post-Order:`)
bst.postOrder(bst.root);    //5 1 30 20 10
console.log(`Breadth_First_Search`);
bst.BFSOrder()  //10 1 20 5 30
console.log(`Mininmum Element in the tree is:`)
console.log(bst.min(bst.root))  //1
console.log(`Maximum Element in the tree is:`)
console.log(bst.max(bst.root))  //30
bst.delete(20);
console.log(`After Deleting 20, In-Order:`);
bst.inOrder(bst.root);   // 1 5 10 30
bst.delete(100);    //Not Found
console.log(`Closest value to 6 in the tree is:`);
console.log(bst.findClosestValue(bst.root, 6));    // 5
console.log(`Is the tree a valid BST:`);
console.log(bst.validateBST(bst.root));    // true