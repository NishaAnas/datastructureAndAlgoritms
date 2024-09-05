function countVowelsandConso(str){
    let vowlescount =0;
    let cosonentcount =0;
    let vowels ='aeiouAEIOU';
    for(let char of str){
        if(vowels.includes(char)){
        vowlescount++
    }else if(char.match(/[a-zA-Z]/i)){
        cosonentcount++;
    }
    }
    return{
        vowlescount,
        cosonentcount
    }
}
let str = 'Hello World';
console.log(countVowelsandConso(str));
//{ vowlescount: 3, cosonentcount: 7 }