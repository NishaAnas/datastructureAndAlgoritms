class Heap{
    constructor(){
        this.heap=[]
    }
    buildMinHeap(arr){
        this.heap = arr.slice();
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.minHeapify(i)
        }
    }
    minHeapify(index) {
        let smallest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.minHeapify(smallest);
        }
    }
    buildMaxHeap(arr){
        this.heap = arr.slice();
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.maxHeapify(i)
        }
    }
    maxHeapify(index){
        let largest=index
        const left=2*index+1
        const right=2*index+2
        if(left<this.heap.length && this.heap[left]>this.heap[largest]){
            largest=left
        }
        if(right<this.heap.length && this.heap[right]>this.heap[largest]){
            largest=right
        }
        if(largest!==index){
            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
            this.maxHeapify(largest)
        }
    }
    insertMinHeap(value){
        this.heap.push(value)
        this.bubbleUpMinHeap(this.heap.length-1)
    }
    bubbleUpMinHeap(index){
        while(index>0){
            let parent = Math.floor((index-1)/2)
            if(this.heap[index]>this.heap[parent]){
                break;
            }
            [this.heap[index],this.heap[parent]]=[this.heap[parent],this.heap[index]]
            index=parent
        }
    }
    insertMaxHeap(value){
        this.heap.push(value)
        this.bubbleUpMaxHeap(this.heap.length-1)
    }
    bubbleUpMaxHeap(index){
        while(index>0){
            let parent=Math.floor((index-1)/2)
            if(this.heap[index]<=this.heap[parent]){
                break;
            }
            [this.heap[index],this.heap[parent]]=[this.heap[parent],this.heap[index]]
            index=parent
        }
    }
     removeMin() {
        if (this.heap.length === 0) return null;
        let min = this.heap[0];
        let end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.minHeapify(0);
        }
        return min;
    }
    removeMax(){
        if(this.heap.length===0){
            return null
        }
        let max = this.heap[0]
        let end = this.heap.pop()
        if(this.heap.length>0){
            this.heap[0]=end
            this.maxHeapify(0)
        }
        return max
    }
}
const minHeap = new Heap();
const maxHeap = new Heap();
let arr = [5, 7, 78, 90, 34, 23, 6, 1, 56, 7, 90, 45];

minHeap.buildMinHeap(arr);
console.log("Min Heap:", minHeap.heap); // Min Heap: [1, 7, 6, 7, 34, 23, 78, 90, 56, 90, 45]

maxHeap.buildMaxHeap(arr);
console.log("Max Heap:", maxHeap.heap); // Max Heap: [90, 90, 78, 56, 34, 23, 6, 1, 7, 5, 7, 45]

minHeap.insertMinHeap(0);
console.log("After Insertion Min Heap:", minHeap.heap); // Min Heap: [0, 1, 6, 7, 7, 23, 78, 90, 56, 34, 90, 45]

maxHeap.insertMaxHeap(100);
console.log("After Insertion Max Heap:", maxHeap.heap); // Max Heap: [100, 90, 90, 56, 7, 78, 6, 1, 34, 7, 5, 45, 23]

minHeap.removeMin();
console.log("After Deletion Min Heap:", minHeap.heap); // Min Heap: [1, 7, 6, 7, 34, 23, 78, 90, 56, 90, 45]

maxHeap.removeMax();
console.log("After Deletion Max Heap:", maxHeap.heap); // Max Heap: [90, 90, 78, 56, 7, 23, 6, 1, 34, 7, 5, 45]