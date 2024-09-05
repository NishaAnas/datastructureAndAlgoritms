function majority(nums){
    let count =0;
    let maj=0;
    for(let num of nums){
        if(count===0){
            maj=num
        }
        if(maj===num){
            count++
        }else{
            count--
        }
    }
    return maj;
}
const nums = [1, 2, 3, 1, 1, 3];
console.log(majority(nums));
//1