//Checking for is the givien number is the power of 2 
function isPowerOf2(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false;
        }
        n=n/2;
    }
    return true;
}
console.log(`is 10 a power of 2 :${isPowerOf2(10)}`);   //is 10 a power of 2 :false
console.log(`is 8 a power of 2 :${isPowerOf2(8)}`);     //is 8 a power of 2 :true