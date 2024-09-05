//Check for prime number
function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
    }
    return true
}
console.log(`is 10 a prime number :${isPrime(10)}`);    //is 10 a prime number :false
console.log(`is 13 a prime number :${isPrime(13)}`);    //is 13 a prime number :true