/*
This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

const Node = (val, left = null, right = null) => {
    return ({
        val, 
        left, 
        right
    })
}

node = Node('root', Node('left', Node('left.left')), Node('right'))

const BFS = (root) => {
    let queue = []
    let nodes = []
    if(root) queue.push(root)    
    while(queue.length) {
        if(queue[0].left) queue.push(queue[0].left)
        if(queue[0].right) queue.push(queue[0].right)
        nodes.push(queue.shift())
    }
    return nodes
}

const serialize = (root) => {
    return BFS(root).map(node => node.val).join("-")
}

const deserialize = (serializedBT) => {
    if(!serializedBT) return null
    let nodes = serializedBT.split("-")
    let root = Node(nodes.shift())
    let queue = [root]
    while(queue.length) {
        let node = queue.shift()
        node.left = nodes[0]? Node(nodes.shift()) : null
        node.right = nodes[1]? Node(nodes.shift()) : null
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return root
}

console.log("Passed test 1: ", serialize(node) === serialize(deserialize(serialize(node))))
console.log("Passed test 2: ", deserialize(serialize(node)).left.left.val == 'left.left')