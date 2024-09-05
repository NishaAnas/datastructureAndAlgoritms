class Graph{
    constructor(){
        this.adjMatrix=[]
        this.vertexIndex={}
        this.indexVertex=[]
        this.vertexCount=0
    }
    addVertex(vertex){
        if(this.vertexIndex[vertex]===undefined){
            this.vertexIndex[vertex]=this.vertexCount
            this.indexVertex[this.vertexCount]=vertex
            this.vertexCount++
            for(let i=0;i<this.adjMatrix.length;i++){
                this.adjMatrix[i].push(0)
            }
            this.adjMatrix.push(new Array(this.vertexCount).fill(0));
        }
    }
    addEdge(vertex1,vertex2){
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        let index1=this.vertexIndex[vertex1]
        let index2=this.vertexIndex[vertex2]
        this.adjMatrix[index1][index2]=1
        this.adjMatrix[index2][index1]=1
    }
    hasEdge(vertex1,vertex2){
        if(this.vertexIndex[vertex1]!==undefined && this.vertexIndex[vertex2]!==undefined){
            let index1=this.vertexIndex[vertex1]
            let index2=this.vertexIndex[vertex2]
            return this.adjMatrix[index1][index2]===1
        }
        return false
    }
    removeEdge(vertex1,vertex2){
        if(this.vertexIndex[vertex1]!==undefined && this.vertexIndex[vertex2]!==undefined){
            let index1=this.vertexIndex[vertex1]
            let index2=this.vertexIndex[vertex2]
            this.adjMatrix[index1][index2]=0
            this.adjMatrix[index2][index1]=0
        }
    }
    removeVertex(vertex){
        let removingIndex=this.vertexIndex[vertex]
            if(removingIndex===undefined){
                return
            }
            this.adjMatrix.splice(removingIndex,1)
            for(let i=0;i<this.adjMatrix.length;i++){
                this.adjMatrix[i].splice(removingIndex,1)
            }
            delete this.vertexIndex[vertex]
            this.indexVertex.splice(removingIndex,1)
            this.vertexCount--
            for(let i=removingIndex;i<this.vertexCount;i++){
                let updateIndex=this.indexVertex[i]
                this.vertexIndex[updateIndex]=i
            }
        }
        display(){
            for(let vertex in this.vertexIndex){
                let index = this.vertexIndex[vertex]
                let edge=this.adjMatrix[index]
                .map((val,i)=>(val===1?this.indexVertex[i]:null
                ))
                .filter((val)=>val!==null)
                console.log(`${vertex}->${edge}`)
            }
        }
}
const graph = new Graph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.display();    //A->B,C
                    //B->A,C
                    //C->A,B
graph.removeVertex("C")
graph.display()     //A->B
                    //B->A