function thirdLarsmall(arr){
    let uniqueSortedarray= [... new Set(arr)].sort((a,b)=>a-b);
    let thirdLarge = uniqueSortedarray[uniqueSortedarray.length-3];
    let thirdSmall =uniqueSortedarray[2];
    return{
        uniqueSortedarray,
        thirdLarge,
        thirdSmall
    }
}
const array =[3,5,7,1,6,8,2,8,9,3,5,7,0];
console.log(thirdLarsmall(array))
    /*{
    uniqueSortedarray: [
        0, 1, 2, 3, 5,
        6, 7, 8, 9
        ],
        thirdLarge: 7,
        thirdSmall: 2
    }*/
    