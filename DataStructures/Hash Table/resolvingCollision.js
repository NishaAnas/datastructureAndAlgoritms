class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total =0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        const index = this.hash(key)
        //this.table[index]=value
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index=this.hash(key)
        //return this.table[index]
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    remove(key){
        const index = this.hash(key)
        //this.table[index]=undefined
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}
let size=50
const table = new HashTable(size)
table.set('name','Bruce');
table.set('age',25);
table.display()     //1 [ [ 'age', 25 ] ]  17 [ [ 'name', 'Bruce' ] ]
console.log(table.get('age'))       //25
console.log(table.get('name'))      //Bruce
table.remove('age')
table.display()     //1 []  17 [ [ 'name', 'Bruce' ] ]
table.set('age',25);
table.display();    //1 [ [ 'age', 25 ]  17 [ [ 'name', 'Bruce' ] ]
table.set('mane','Danny');
table.display();    //1 [ [ 'age', 25 ] ]   17 [ [ 'name', 'Bruce' ], [ 'mane', 'Danny' ] ]
console.log(table.get('mane'))  //Danny