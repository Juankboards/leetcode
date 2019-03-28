/*
Get the max value when your backpack has a maximum weight of items and each item has a value
*/

function knapSack(W , wt , val, cache = {}) {    
    // Base case  
    if(!wt.length || W == 0) return 0
    
    // keys used in cache 
    let key1 = JSON.stringify({ W, wt: wt.slice(0, wt.length - 1) , val: val.slice(0, val.length - 1) })
    let key2 = JSON.stringify({ W: W-wt[wt.length - 1], wt: wt.slice(0, wt.length - 1) , val: val.slice(0, val.length - 1) })

    // check if called already with key1 parameters or store it on the cache
    cache[key1] = cache[key1] || knapSack(W , wt.slice(0, wt.length - 1) , val.slice(0, val.length - 1), cache)
    if(wt[wt.length - 1] > W) return cache[key1]
        
    // check if called already with key2 parameters or store it on the cache
    cache[key2] = cache[key2] || knapSack(W-wt[wt.length - 1] , wt.slice(0, wt.length - 1) , val.slice(0, val.length - 1), cache)
    return Math.max(val[val.length - 1] + cache[key2], cache[key1]) 
}

console.log(knapSack(50 , [10, 20, 30], [60, 100, 120]))