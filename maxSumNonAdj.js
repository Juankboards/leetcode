const maxSumNonAdj = (arr, cache = {}) => {
    if(arr.length < 2) return arr[0] || 0
    if(arr.length === 2) return Math.max(arr[0], arr[1])
    let key = JSON.stringify(arr)
    cache[key] = cache[key] || Math.max(arr[0] + maxSumNonAdj(arr.slice(2), cache), arr[1] + maxSumNonAdj(arr.slice(3), cache))
    return cache[key]
}

console.log(maxSumNonAdj([5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1000]))
console.log(maxSumNonAdj([5, 1, 1, 5]))
console.log(maxSumNonAdj([-5, 1, 1, -5]))