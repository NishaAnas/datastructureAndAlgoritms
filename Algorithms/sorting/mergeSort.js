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
    split(head){
      if(!head||!head.next){
          return [head,null]
      }  
      let slow=head
      let fast=head
      while(fast&&fast.next&&fast.next.next){
          slow=slow.next
          fast=fast.next.next
      }
      let middle = slow.next
      slow.next=null
      if(middle){
          middle.prev=null
      }
      return [head,middle]
    }
    merge(left,right){
        if(!left){
            return right
        }
        if(!right){
            return left
        }
        if(left.value<right.value){
            left.next=this.merge(left.next,right)
            if(left.next){
                left.next.prev=left
            }
                left.prev=null
                return left
            }else{
                right.next=this.merge(left,right.next)
                if(right.next){
                    right.next.prev=right
                }
                    right.prev=null
                    return right
                }
            }
    mergeSortRec(head){
        if(!head||!head.next){
            return head
        }
        let [left,right]=this.split(head)
        left = this.mergeSortRec(left)
        right=this.mergeSortRec(right)
        return this.merge(left,right)
    }
    mergeSort(){
        this.head=this.mergeSortRec(this.head)
        let curr=this.head;
        this.tail=null
        while(curr){
            this.tail=curr
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
list.mergeSort()
list.print();   //1 11 20 20 23 34 34 60 67 
