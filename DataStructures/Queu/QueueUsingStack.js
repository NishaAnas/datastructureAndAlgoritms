class Stack{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    getsize(){
        return this.items.length
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return 'Stack is Empty'
        }
        return this.items.pop()
    }
    peek(){
        if(this.isEmpty()){
            return 'stack is Empty'
        }
        return this.items[this.items.length-1]
    }
    fromInput(input){
        for(let value of input){
            this.push(value)
        }
    }
}
class QueueUsingStack{
    constructor(){
        this.stack1=new Stack()
        this.stack2=new Stack()
    }
    isEmpty(){
        return this.stack1.isEmpty()&&this.stack2.isEmpty()
    }
    getSize(){
        return this.stack1.getsize()+this.stack2.getsize()
    }
    enqueue(value){
        this.stack1.push(value)
    }
    dequeue(){
        if(this.stack2.isEmpty()){
            while(!this.stack1.isEmpty()){
                this.stack2.push(this.stack1.pop())
            }
        }
            if(!this.stack2.isEmpty()){
                return this.stack2.pop()
            }
            return 'stack is Empty'
        }
    frontElem(){
        if(this.stack2.isEmpty()){
            while(!this.stack1.isEmpty()){
                this.stack2.push(this.stack1.pop())
            }
        }
            if(!this.stack2.isEmpty()){
                return this.stack2.peek()
            }
            return 'Stack is Empty'
        }
    print(){
        let elements=[]
        for(let i=this.stack2.items.length-1;i>=0;i--){
            elements.push(this.stack2.items[i])
        }
        for(let i=0;i<this.stack1.items.length;i++){
            elements.push(this.stack1.items[i])
        }
        console.log(`Elements in the Queue are :${elements.join(', ')}`)
    }
}
let queue = new QueueUsingStack()
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();  
//Elements in the Queue are :10, 20, 30

console.log(`Element dequeued is :${queue.dequeue()}`)  
//Element dequeued is :10

queue.print();  
//Elements in the Queue are :20, 30

console.log(`Is Queue Empty:${queue.isEmpty()}`);  
 //Is Queue Empty:false

queue.print();  
//Elements in the Queue are :20, 30

console.log(`Element dequeued is :${queue.dequeue()}`)  
//Element dequeued is :20

queue.print();  
//Elements in the Queue are :30

console.log(`Is Queue Empty:${queue.isEmpty()}`);   
//Is Queue Empty:false

queue.print();  
//Elements in the Queue are :30

console.log(`Element dequeued is :${queue.dequeue()}`)  
//Element dequeued is :30

queue.print();  
//Elements in the Queue are :

console.log(`Is Queue Empty:${queue.isEmpty()}`);   
//Is Queue Empty:true