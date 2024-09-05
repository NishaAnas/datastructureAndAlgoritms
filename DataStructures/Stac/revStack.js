class Stack{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.size===0
    }
    getSize(){
        return this.items.length
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return 'stack is Empty'
        }
        return this.items.pop()
    }
    removeMiddle(){
        if(this.isEmpty()){
            return 'stack is Empty'
        }
        let middle=Math.floor(this.getSize()/2)
        return this.items.splice(middle,1)[0]
    }
    reverseStack() {
        let tempStack = [];
        let revArray = [];

        // Transfer all items from the original stack to the temporary stack
        while (!this.isEmpty()) {
            tempStack.push(this.pop());
        }

        // Transfer items from tempStack to revArray (this array is now reversed)
        while (tempStack.length > 0) {
            let item = tempStack.pop();
            revArray.push(item);
            this.push(item); // Restore the stack
        }

        return revArray;
    }
}
const stack = new Stack()
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(50);
stack.push(60);
console.log(stack.items)
console.log(`After Removing Middle :${stack.removeMiddle()}`)
console.log(stack.items)
let revArray = stack.reverseStack();
console.log(`After Reversing Stack:${revArray}`)