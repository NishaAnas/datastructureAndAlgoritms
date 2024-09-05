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
    removeFromFront(){
        
        if(this.isEmpty()){
            return 'Queue is Empty'
        }
        let removedNode=this.head
        if(this.head===this.tail){
            this.head=null
            this.tail=null
        }else{
            this.head=this.head.next
            this.head.prev=null
        }
        this.size--
        return removedNode.value
    }
}
class LinkedListQueue{
    constructor(){
        this.list = new LinkedList()
    }
    enqueue(value){
       return this.list.append(value)
    }
    dequeue(){
       return this.list.removeFromFront()
    }
    peek(){
        return this.list.head.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getSize(){
        return this.list.getSize()
    }
}
const queue = new LinkedListQueue()
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(60);
console.log(queue.peek());  //10
console.log(queue.dequeue());   //10
console.log(queue.peek());  //20
console.log(queue.isEmpty());   //false
console.log(queue.getSize());   //2
console.log(queue.dequeue());   //20
console.log(queue.dequeue());  //60
console.log(queue.dequeue());   //Queue is Empty
console.log(queue.isEmpty());   //true
console.log(queue.getSize());   //0