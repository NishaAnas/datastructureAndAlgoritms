class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class doubleLinkList{
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
    fromArray(arr){
        for(let value of arr){
            this.append(value)
        }
    }
    bubbleSort(){
        if(this.isEmpty()||this.size===1){
            return
        }
        let swapped=true
        while(swapped){
            swapped=false
            let curr=this.head
            while(curr&&curr.next){
                if(curr.value>curr.next.value){
                    let temp = curr.value
                    curr.value=curr.next.value
                    curr.next.value=temp
                    swapped=true
                }
                curr=curr.next
            }
        }
    }
    print(){
        if(this.isEmpty()){
            return "list empty"
        }
        let listValues=''
        let curr=this.head
        while(curr){
            listValues+=`${curr.value} `
            curr=curr.next
        }
        console.log(listValues)
    }
}
const list = new doubleLinkList();
console.log(list.getSize());    //0
let arr = [20,60,1,23,67,11,34,20,34];
list.fromArray(arr);
list.print();   //20 60 1 23 67 11 34 20 34 
list.bubbleSort()
list.print();   //1 11 20 20 23 34 34 60 67 
