function replaceWithNthAlpha(string , n){
    let result ='';
    for(let char of string){
        if(char.match(/[a-z]/i)){
            let charCode = char.charCodeAt(0);
            let base;
            if(charCode>=65 && charCode <90){
                base =65;
            }else{
                base = 90
            }
            let newCharCode = ((((charCode-base)+n)%26)+base);
            result+= String.fromCharCode(newCharCode);
        }else{
            result+=char;
        }
    }
    return result;
}
let string = 'Hello World'
let n= 2;
console.log(`After Rearranging th eString becomes :${replaceWithNthAlpha(string,n)}`);
//After Rearranging th eString becomes :Jgnnq YqZnf