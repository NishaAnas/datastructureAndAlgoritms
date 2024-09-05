class TrieNode{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insert(word){
        let node= this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node=node.children[char]
        }
        node.isEndOfWord=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.isEndOfWord
    }
    delete(word){
        const deleteRec = (node,word,index)=>{
            if(index===word.length){
               if(!node.isEndOfWord){
                   return false
               }
               node.isEndOfWord=false
            return Object.keys(node.children).length===0
        }
        const char=word[index]
        const childNode=node.children[char]
        if(!childNode){
            return false
        }
        const shouldDeleteChild=deleteRec(childNode,word,index+1)
        if(shouldDeleteChild){
            delete node.children[char]
            return !node.isEndOfword && Object.keys(node.children).length===0
        }
        return false
    }
     deleteRec(this.root, word, 0);
    }
    autocomplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        return this._findAllWords(node, prefix);
    }
    _findAllWords(node, prefix) {
        let results = [];
        if (node.isEndOfWord) {
            results.push(prefix);
        }
        for (let char in node.children) {
            results = results.concat(this._findAllWords(node.children[char], prefix + char));
        }
        return results;
    }
}
const trie = new Trie();
trie.insert('hello');
trie.insert('world');
//trie.delete('hello');
console.log(trie.search('hello')); // false
console.log(trie.search('world'));  // true
trie.insert('hell');
trie.insert('helicopter');
trie.insert('hero');
console.log(trie.autocomplete('hel')); // ['hello', 'hell', 'helicopter']