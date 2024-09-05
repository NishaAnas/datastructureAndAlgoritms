class Stack{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    getsize(){
        return this.items.length
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return 'Stack is Empty'
        }
        return this.items.pop()
    }
    peek(){
        if(this.isEmpty()){
            return 'stack is Empty'
        }
        return this.items[this.items.length-1]
    }
    fromInput(input){
        for(let value of input){
            this.push(value)
        }
    }
    reverse(input){
        let isArray = Array.isArray(input)
        if(isArray){
            this.fromInput(input)
        }else{
            this.fromInput(input.split(''))
        }
        let rev=[]
        while(!this.isEmpty()){
            rev.push(this.pop())
        }
        return isArray?rev:rev.join('')
    }
    highestRepeatedChar(input){
        let isArray = Array.isArray(input)
        if(isArray){
            this.fromInput(input)
        }else{
            this.fromInput(input.split(''))
        }
        let charCount={}
        while(!this.isEmpty()){
            let char = this.pop()
            if(charCount[char]){
                charCount[char]++
            }else{
                charCount[char]=1
            }
        }
        let maxChar=''
        let maxCount=0
        for(let char in charCount){
            if(charCount[char]>maxCount){
                maxCount=charCount[char]
                maxChar=char
            }
        }
        return {
            maxChar,
            maxCount
        }
    }
    removeDuplicates(input){
        let result=[]
        let isArray = Array.isArray(input)
        if(isArray){
            this.fromInput(input)
        }else{
            this.fromInput(input.split(''))
        }
        while(!this.isEmpty()){
            let value = this.pop()
            if(result.indexOf(value)===-1){
                result.unshift(value)
            }
        }
        return isArray?result:result.join('')
    }
}
const stack = new Stack()

let arr=[7,8,7,5,9,2,9,6,7,4,6,9,2,1,0,5]
console.log(`Reversed Array is :${stack.reverse(arr)}`) 
//Reversed Array is :5,0,1,2,9,6,4,7,6,9,2,9,5,7,8,7

let str= 'Hello World'
console.log(`Reversed String is :${stack.reverse(str)}`)    
//Reversed String is :dlroW olleH

let hRepeatNum=stack.highestRepeatedChar(arr);
console.log(`Heigest Repeated Char :${hRepeatNum.maxChar} and count is :${hRepeatNum.maxCount}`)
//Heigest Repeated Char :7 and count is :3

let hRepeatChar=stack.highestRepeatedChar(str)
console.log(`Heigest Repeated Char :${hRepeatChar.maxChar} and count is :${hRepeatChar.maxCount}`) 
//Heigest Repeated Char :l and count is :3

console.log(`After Removing Duplicates The array is :${stack.removeDuplicates(arr)}`)   
//After Removing Duplicates The array is :8,7,4,6,9,2,1,0,5

console.log(`After Removing Duplicates The array is :${stack.removeDuplicates(str)}`)   
//After Removing Duplicates The array is :He World