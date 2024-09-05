class Graph{
    constructor(){
        this.adjList={}
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjList[vertex1].has(vertex2) &&
            this.adjList[vertex2].has(vertex1)
            )
    }
    removeEdge(vertex1,vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjList[vertex]){
            return
        }
        for(let adjVertex of this.adjList[vertex]){
            this.removeEdge(vertex,adjVertex)
        }
        delete this.adjList[vertex]
    }
    display(){
        for(let vertex in this.adjList){
            console.log(vertex+"->"+[...this.adjList[vertex]])
        }
    }
    dfs(start){
        let visited = new Set()
        // const result = [];
        // this.#dfsHelper(start, visited, result);
        // return result;
        let preOrder=[]
        let postOrder=[]
        this.#dfsTraversal(start,visited,preOrder,postOrder)
        return{
            preOrder,
            postOrder
        }
    }
    #dfsTraversal(vertex,visited,preOrder,postOrder){
        if(!vertex){
            return
        }
        visited.add(vertex)
        // result.push(vertex);
        // for (let neighbor of this.adjList[vertex]) {
        //     if (!visited.has(neighbor)) {
        //         this.#dfsHelper(neighbor, visited, result);
        //     }
        // }
        preOrder.push(vertex)
        for(let neighbour of this.adjList[vertex]){
            if(!visited.has(neighbour)){
                this.#dfsTraversal(neighbour,visited,preOrder,postOrder)
            }
        }
        postOrder.push(vertex)
    }
    bfs(start){
        let visited= new Set()
        let queue=[start];
        let result=[]
        visited.add(start)
        while(queue.length>0){
            let vertex = queue.shift()
            result.push(vertex)
            for(let neighbour of this.adjList[vertex]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            }
        }
        return result
    }
}
const graph = new Graph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.display();
console.log(graph.hasEdge("A","C")) //true
console.log(graph.hasEdge("A","B")) //true
// graph.removeEdge("A","B");
// graph.display();
const { preOrder, postOrder } = graph.dfs("A");
console.log("DFS Preorder traversal:", preOrder);   //[ 'A', 'B', 'D', 'C', 'E' ] 
console.log("DFS Postorder traversal:", postOrder); //[ 'D', 'B', 'E', 'C', 'A' ]
console.log("BFS traversal:", graph.bfs("A"));  //[ 'A', 'B', 'C', 'D', 'E' ]