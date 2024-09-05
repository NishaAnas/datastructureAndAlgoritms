function arrayOperations(arr){
    //indexing 
    console.log(`Element at index 2 is :${arr[2]}`);    //Element at index 2 is :7

    //iteration
    for(let i=0;i<arr.length;i++){
        console.log(`Elements of array is :${arr[i]}`);
    }

    //Add elements to the last
    arr.push(10);
        console.log(`Elements of array is :${arr}`);    
        //Elements of array is :1,5,7,1,8,3,9,4,7,3,5,0,10

    //Remove elemnts from the last
    arr.pop();
        console.log(`Elements of array is :${arr}`);    
        //Elements of array is :1,5,7,1,8,3,9,4,7,3,5,0

    //Add elements to the first
    arr.unshift(20);
        console.log(`Elements of array is :${arr}`);    
        //Elements of array is :20,1,5,7,1,8,3,9,4,7,3,5,0

    //Remove elemnts from the first
    arr.shift();
        console.log(`Elements of array is :${arr}`);    
        //Elements of array is :1,5,7,1,8,3,9,4,7,3,5,0

    //index of a number
    console.log(`index of 9 is :${arr.indexOf(9)}`);    //index of 9 is :6

    //Does a number is included in the array
    console.log(`Does 5 is included in the Array :${arr.includes(5)}`); 
    //Does 5 is included in the Array :true

    console.log(`Does 20 is included in the Array :${arr.includes(20)}`);   
    //Does 20 is included in the Array :false

    //Remove Duplicates
    let uniqueArray =[];
    for(i=0;i<arr.length;i++){
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i]);
        }
    }
console.log(`After Removing Dupicates :${uniqueArray}`);    
//After Removing Dupicates :1,5,7,8,3,9,4,0

//Bubble sort
for(let i=0 ;i<uniqueArray.length;i++){
    for(let j=0;j<uniqueArray.length-1-i;j++){
        if(uniqueArray[j]>uniqueArray[j+1]){
            let temp = uniqueArray[j];
            uniqueArray[j]=uniqueArray[j+1];
            uniqueArray[j+1]=temp
        }
    }
}
console.log(`After bubble sorting array is :${uniqueArray}`);   
//After bubble sorting array is :0,1,3,4,5,7,8,9
}

//initializing
let arr = [1,5,7,1,8,3,9,4,7,3,5,0];
arrayOperations(arr);