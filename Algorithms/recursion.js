//Recursion
//Fibinocii Series
function fibinocii(n){
    if(n<2){
        return n;
    }
    while(n>=2){
        return fibinocii(n-1)+fibinocii(n-2)
    }
}
console.log(`fibinocii number at 10th position is :${fibinocii(10)}`)  
//fibinocii number at 10th position is :55

//Factorial 
function factorial(n){
    if(n<=1){
        return 1
    }
    while(n>1){
        return n*factorial(n-1)
    }
}
console.log(`factorial of 10 is :${factorial(10)}`)     //factorial of 10 is :3628800