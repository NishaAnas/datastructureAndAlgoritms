//Recursive Binary Search
function binarySearch(arr,target){
    arr.sort((a,b)=>a-b);
    let uArr = Array.from(new Set(arr));
    let left =0;
    let right = uArr.length-1;
    while(left<=right){
        let middle = Math.floor((left+right)/2);
        if(target===uArr[middle]){
            return middle;
        }
        if(target<uArr[middle]){
            right = middle-1
        }else{
            left = middle+1
        }
    }
    return -1
}
let arr =[1,4,6,2,8,4,0,2,5,6,12,45,20];
let target = 45;
console.log(`the position of ${target} in the array :${binarySearch(arr,target)}`)
//the position of 45 in the array :9