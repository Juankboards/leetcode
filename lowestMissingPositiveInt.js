/*
Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that 
does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

const lowestMissingPosInt = (nums) => {
    let positiveNums = nums.filter(num => num > 0)
    positiveNums.forEach((num) => {
        let pointer = Math.abs(num) - 1 //zero based
        if(pointer < positiveNums.length && positiveNums[pointer] > 0) positiveNums[pointer] *= -1
    })    
    return (positiveNums.findIndex(num => num > 0) + 1 || positiveNums.length + 1)
}


console.log(lowestMissingPosInt([1, 2, 0]))