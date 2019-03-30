/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

// the product of all elements except self is product of element to the left times product of elements to the right

//O(2n)
const elementsProduct = (nums) => {
    let product = []
    let pivot = 1
    // left product
    for(let i = 0; i < nums.length; i++) {
        product[i] = pivot
        pivot *= nums[i]
        
    }
    pivot = 1
    // right product
    for(let i = nums.length - 1; i >= 0; i--) {
        product[i] *= pivot
        pivot *= nums[i]
        
    }
    return product
}

console.log(elementsProduct([2, 3, 4, 5, 6]))