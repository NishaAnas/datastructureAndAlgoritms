//Linear Search
function linearSearch(arr,target){
    for(i=0;i<arr.length;i++){
    if(arr[i]==target){
        return i;
    }
}
}
let arr =[1,4,6,2,8,4,0,2,5,6,12,45,20];
let target = 45;
console.log(`the position of ${target} in the array :${linearSearch(arr,target)}`)

//the position of 45 in the array :11