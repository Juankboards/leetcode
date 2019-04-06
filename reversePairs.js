/* 
Given an array nums, we call (i, j) an important reverse pair if i < j and nums[i] > 2*nums[j].

You need to return the number of important reverse pairs in the given array.

Example1:

Input: [1,3,2,3,1]
Output: 2

Example2:

Input: [2,4,3,5,1]
Output: 3

Note:

    The length of the given array will not exceed 50,000.
    All the numbers in the input array are in the range of 32-bit integer.
*/

const reversePairsBruteForce = (nums) => {
    let counter = 0
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] > 2 * nums[j]) counter++
        }
    }
    return counter
}

console.log(reversePairsBruteForce([7,5,12,5,3,2,1]))

//if array in ascending order BST BigO is O(n^2)
const reversePairs = (nums) => {
    const BST = () => {
        let head = null
        const Node = (val) => ({ val, left: null, rigth: null, counter: 1 })
        return ({
            insert(val) {
                const newNode = Node(val)
                let current = head
                let prev = null
                let direction = ""
                if(!current) return head= newNode
                while(current) {
                    prev = current
                    if(val === current.val) return current.counter += 1
                    if(val < current.val) {
                        current = current.left
                        direction = "left"
                        continue
                    }
                    if(val > current.val) {
                        current.counter += 1
                        current = current.rigth
                        direction = "rigth"
                        continue
                    }
                }
                return prev[direction] = newNode
            },
            search(val) {
                let searchVal = val * 2 + 1
                let counter = 0
                let current = head
                while(current) {
                    if(searchVal == current.val) return counter + current.counter
                    if(searchVal > current.val) {
                        current = current.rigth
                        continue
                    }
                    if(searchVal < current.val) {
                        counter += current.counter
                        current = current.left
                        continue
                    }
                }
                return counter
            }
        })
    }
    let counter = 0   
    let tree = BST()
    randomNums.forEach(rand => {
        counter += tree.search(nums[rand])
        tree.insert(nums[rand])
    })
    return counter
}

console.log(reversePairs([7,5,12,5,3,2,1]))