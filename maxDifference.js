/*
Calculate the mx diff between to numbers passed on an array a, a[j] - a[i] = maxDiff where 0<=i<j and a[i] < a[j]


*/

const maxDiff = (nums) => {
    let min = nums.shift()
    let max
    let pivot
    for(let num of nums) {
        if(num < min && max === undefined) {
            min = num
            continue
        }
        if(num < min && (pivot === undefined || num < pivot)) {           
            pivot = num
            continue
        }
        if(num >= min && (max === undefined || num >= max)) {
            max = num
            if(max - pivot > max - min) {
                min = pivot
                pivot = undefined
            }
        }            
    }
    return max !== undefined? max - min : -1
}

console.log(maxDiff([7,2,3,10,1,5]))