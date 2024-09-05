function binarySearch(arr,target){
    arr.sort((a,b)=>a-b);
    let uArr = Array.from(new Set(arr));
    return search(uArr,target,0,arr.length-1);
}
function search(arr,target,left,right){
    let middle = Math.floor((left+right)/2);
    if(target===arr[middle]){
        return middle;
    }
    if(target<arr[middle]){
        return search(arr,target,left,middle-1);
    }else{
        return search(arr,target,middle+1,right);
    }
}
let arr =[1,4,6,2,8,4,0,2,5,6,12,45,20];
let target = 45;
console.log(`the position of ${target} in the array :${binarySearch(arr,target)}`);
//the position of 45 in the array :9