//Get every combination of change when passing coins denomination and total

function combos(coins, sum) {
    if(!sum) return [[]]

    coins = coins.filter(coin => coin <= sum)
    let solutions = []
   
    coins.forEach(coin => {
        results = combos(coins, sum - coin)
        results = results.map(result => result.sort())
        solutions = uniqueArray(solutions.concat(results.map(result => result.concat([coin]).sort())))
    })

    return solutions
}

const uniqueArray = (myArray) => {
    return myArray.filter((elem, pos) => {
        return myArray.map(elem => elem.toString()).indexOf((elem).toString()) == pos;
    })
}

console.log(combos([1,5], 10))