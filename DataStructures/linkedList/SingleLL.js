class Node{                 //create a node
    constructor(value){
        this.value = value
        this.next =null
    }
}
class LinkedList{           //craete alinkedList
    constructor(){
        this.head=null;
        this.size=0
    }
    isEmpty(){              //check if th elist is empty
        return this.size===0
    }
    getSize(){              //get the size of the list
        return this.size
    }
    prepend(value){         //Add value to the head
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){          //Add value to th elast
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev = this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    insertTo(index,value){      //Insert the value to the given index
        if(index<0||index>this.size){
            return 'Invalid Index'
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next = prev.next
            prev.next=node
            this.size++
        }
    }
    removeFrom(index){          //Remove value from the given index
        if(index<0||index>this.size){
            return 'Invalid Index'
        }
        let removedNode
        if(index===0){
            removedNode=this.head
            this.head=this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size--
        return removedNode.value
    }
    removeValue(value){         //Remove the node having given value
        if(this.isEmpty()){
            return 'list empty'
        }
        let removedNode
        if(this.head.value===value){
            removedNode=this.head
            this.head=removedNode.next
            this.size--
            return removedNode.value
        }else{
            let prev=this.head
            while(prev.next&&prev.next.value!==value){
                prev=prev.next
            }if(prev.next){
                removedNode=prev.next
                prev.next=removedNode.next
                this.size--
                return removedNode.value
            }
                return null
        }
    }
    search(value){          //Search for the given value
        if(this.isEmpty()){
            return -1
        }
        let curr=this.head
        for(let i=0;i<this.size;i++){
            if(curr.value===value){
                 return i
            }
        curr=curr.next
        }
        return -1
    }
    reverseList(){              //Reverse the list
        let prev=null
        let curr=this.head
        while(curr){
            let next = curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
    sort() {            //Sort the list
        if (this.size <= 1) {
            return -1;
        }
        let swapped = true;
        while (swapped) {
            swapped = false;
            let curr = this.head;
            while (curr !== null && curr.next !== null) {
                if (curr.value > curr.next.value) {
                    // Swap values
                    let temp = curr.value;
                    curr.value = curr.next.value;
                    curr.next.value = temp;
                    swapped = true;
                }
                curr = curr.next;
            }
        }
    }
    removeDuplicates() {        //remove the duplicates from the list
        if (this.isEmpty()) return;
        let curr = this.head;
        while (curr.next) {
            if (curr.value === curr.next.value) {
                curr.next = curr.next.next;
                this.size--;
            } else {
                curr = curr.next;
            }
        }
    }
    insertBefore(nodeData, value) {         //Insert before the given nodeData
    if (this.isEmpty()) {
        return 'List is empty';
    }
    const node = new Node(value);
    if (this.head.value === nodeData) {
        this.prepend(value);
        return;
    }
    let prev = this.head;
    while (prev.next && prev.next.value !== nodeData) {
        prev = prev.next;
    }
    if (prev.next) {
        node.next = prev.next;
        prev.next = node;
        this.size++;
    } else {
        return 'Node not found';
    }
}
    insertAfter(nodeData, value) {          //Insert after the given nodeData
    if (this.isEmpty()) return 'List is empty';
    const node = new Node(value);

    let curr = this.head;
    while (curr && curr.value !== nodeData) {
        curr = curr.next;
    }
    if (curr) {
        node.next = curr.next;
        curr.next = node;
        this.size++;
    } else {
        return 'Node not found';
    }
}
    print(){            //Print th egiven list
   if (this.isEmpty()){
        console.log(`List is Empty`);
    }else{
        let curr = this.head;
        let listValues='';
        while(curr){
            listValues+=`${curr.value} `
            curr=curr.next
        }
        console.log(listValues)
    }
}
}

const list = new LinkedList()   
console.log(`is List Empty:${list.isEmpty()}`); //is List Empty:true
list.print();   //List is Empty
console.log(`size of the list:${list.getSize()}`);  //size of the list:0
list.print();   //List is Empty
list.prepend(10);
list.print();   //10
list.prepend(20);
list.print();   //20 10
list.prepend(30);
list.print();   //30 20 10
list.append(0);
list.print();   //30 20 10 0
list.append(-10);
list.print();   //30 20 10 0 -10
list.append(40);
list.print();   //30 20 10 0 -10 40 
list.prepend(90);
list.print();   //90 30 20 10 0 -10 40 
list.append(60);
list.print();   //90 30 20 10 0 -10 40 60 
list.insertTo(2,50);
list.print();   //90 30 50 20 10 0 -10 40 60 
list.insertTo(0,30);
list.print();   //30 90 30 50 20 10 0 -10 40 60 
list.removeFrom(4);
list.print();   //30 90 30 50 10 0 -10 40 60 
list.removeValue(40);
list.print();   //30 90 30 50 10 0 -10 60 
list.removeValue(50);
list.print();   //30 90 30 10 0 -10 60 
console.log(list.search(20))    //-1
console.log(list.search(10))    //3
list.reverseList()
list.print();   //60 -10 0 10 30 90 30 
list.sort();
list.print();   //-10 0 10 30 30 60 90
list.removeDuplicates();
list.print();   //-10 0 10 30 60 90 
list.insertBefore(30, 25)    
list.print();   //-10 0 10 25 30 60 90
list.insertAfter(30, 35)
list.print();   //-10 0 10 25 30 35 60 90 