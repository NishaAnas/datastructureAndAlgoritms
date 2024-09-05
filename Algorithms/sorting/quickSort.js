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
    partition(start,end){
        let pivot=start.value;
        let pI=start
        for(let j=start.next;j!=end.next;j=j.next){
            if(j.value<pivot){
                pI=pI.next
                let temp=j.value
                j.value=pI.value
                pI.value=temp
            }
        }
        let temp = start.value
        start.value=pI.value
        pI.value=temp
        return pI
    }
    quickSortRec(start,end){
        if(start!==end&&start!==end.next){
            let pI=this.partition(start,end)
            this.quickSortRec(start,pI.prev);
            this.quickSortRec(pI.next,end)
        }
    }
    quickSort(){
        this.quickSortRec(this.head,this.tail)
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
list.quickSort()
list.print();   //1 11 20 20 23 34 34 60 67 
