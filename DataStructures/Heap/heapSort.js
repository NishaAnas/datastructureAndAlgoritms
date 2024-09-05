class HeapSort{
    constructor(){
        this.heap=[]
    }
    heapSort(arr){
        this.buildMaxHeap(arr);
        for(let i=arr.length-1;i>=0;i--){
            [this.heap[0],this.heap[i]]=[this.heap[i],this.heap[0]]
            this.maxHeapify(0, i);
        }
        return this.heap
    }
    buildMaxHeap(arr){
        this.heap=arr
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.maxHeapify(i,this.heap.length)
        }
    }
    maxHeapify(index,heapSize){
        let largest=index;
        let left = 2*index+1
        let right=2*index+2
        if(left<heapSize && this.heap[left]>this.heap[largest]){
            largest=left
        }
        if(right<heapSize && this.heap[right]>this.heap[largest]){
            largest = right
        }
        if(largest!==index){
            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
            this.maxHeapify(largest,heapSize)
        }
    }
}
const heapSortInstance = new HeapSort();
let arr = [5, 7, 78, 90, 34, 23, 6, 1, 56, 7, 90, 45];
console.log("Unsorted array:", arr);
let sortedArray = heapSortInstance.heapSort(arr);
console.log("Sorted array:", sortedArray);  //[1, 5, 6, 7, 7, 23, 34, 45, 56, 78, 90, 90]