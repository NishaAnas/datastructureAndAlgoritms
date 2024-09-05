class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
        this.tail.next=node
        node.prev=this.tail
        this.tail=node
        }
        this.size++
    }
    removeFromEnd(){
        
        if(this.isEmpty()){
            return 'Stack is Empty'
        }
        let removedNode=this.tail
        if(this.head===this.tail){
            this.head=null
            this.tail=null
        }else{
            this.tail=this.tail.prev
            this.tail.next=null
        }
        this.size--
        return removedNode.value
    }
}
class LinkedListStack{
    constructor(){
        this.list = new LinkedList()
    }
    push(value){
       return this.list.append(value)
    }
    pop(){
       return this.list.removeFromEnd()
    }
    peek(){
        return this.list.tail.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getSize(){
        return this.list.getSize()
    }
}
const stack = new LinkedListStack()
stack.push(10);
stack.push(20);
stack.push(60);
console.log(stack.peek());  // 60
console.log(stack.pop());   // 60
console.log(stack.peek());  // 20
console.log(stack.isEmpty());   // false
console.log(stack.getSize());   // 2
console.log(stack.pop());   // 20
console.log(stack.pop());   // 10
console.log(stack.pop());   // Stack is Empty
console.log(stack.isEmpty());   // true
console.log(stack.getSize());   // 0