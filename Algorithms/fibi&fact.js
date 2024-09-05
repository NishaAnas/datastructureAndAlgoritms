//Fibinocii series
function fibinocii(n){
    let fibi =[0,1];
    for(let i=2;i<=n;i++){
        fibi[i]=fibi[i-1]+fibi[i-2];
    }
    return fibi;
}
console.log(`the fibinocii series upto 10 is :${fibinocii(10)}`);   
//the fibinocii series upto 10 is :0,1,1,2,3,5,8,13,21,34,55

//Factorial of a number
function factorial(n){
    let fact =1;
    for(let i=n;i>=1;i--){
        fact*=i
    }
    return fact;
}
console.log(`the factorial of 10 is :${factorial(10)}`) //the factorial of 10 is :3628800