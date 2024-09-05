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
    selectionSort(){
        if(this.head===null||this.head.next===null){
            return 'Nothing to sort'
        }
        let curr=this.head
        while(curr){
            let min= curr
            let next=curr.next
            while(next){
                if(next.value<min.value){
                    min=next
                }
                next=next.next
            }
            if(min!==curr){
                let temp=min.value
                min.value=curr.value
                curr.value=temp
            }
            curr=curr.next
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
list.selectionSort()
list.print();   //1 11 20 20 23 34 34 60 67 
