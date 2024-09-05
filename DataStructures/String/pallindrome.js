function isPalindrome(str){
    let normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    let revStr = normalizedStr.split('').reverse().join('');
    return normalizedStr===revStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama!"));   //true
console.log(isPalindrome("Was it a car or a cat I saw?")); //true
console.log(isPalindrome("No 'x' in Nixon"));   //true
console.log(isPalindrome("Hello, world!")); //false