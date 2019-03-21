/*
Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
Input: [[1,2], [3], [3], []] 
Output: [[0,1,3],[0,2,3]] 
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Note:

    The number of nodes in the graph will be in the range [2, 15].
    You can print different paths in any order, but you should keep the order of nodes inside one path.
*/

const allPathsSourceTarget = function(graph) {
    let nodesPaths = {}
    graph.forEach((_, node) => findPaths(graph, nodesPaths, node))
    return filteredPaths(nodesPaths)
};

const findPaths = (graph, nodesPaths, node, passing) => {
    if(nodesPaths[node] && nodesPaths[node].passed) return //do not repeat work on a node already passed. This can only happen when called from allPathsSourceTarget
    nodesPaths[node] = { paths: [], passed: passing? true : false } //initialize node on paths hash
    if(!graph[node].length) return nodesPaths[node].paths = nodesPaths[node].paths.concat([[node]])
    for(let path of graph[node]) {
        if(nodesPaths[path]) nodesPaths[path].passed = true
        let tails = nodesPaths[path]? nodesPaths[path].paths : findPaths(graph, nodesPaths, path, true)
        for(let tail of tails) nodesPaths[node].paths.push([node, ...tail])
    }
    return nodesPaths[node].paths
}

const filteredPaths = (paths) => {
    return Object.keys(paths).reduce((acc, node) => paths[node].passed? acc : acc.concat(paths[node].paths), [])
}

// console.log(allPathsSourceTarget([[],[0,5],[0],[1,4],[1],[]]))