/*
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26

Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).

Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
*/

// this solution has a space problem
// const numDecodings = (str) => {
//     let solutions = numDecodingsCombos(str)
//     return solutions.length
// }

// const numDecodingsCombos = (str) => {
//     if(!str) return [""]
//     let decode = numDecodingsCombos(str.slice(1)).map(result => `${decoder(str[0])}${result}`)
//     if(str.length > 1 && decoder(`${str[0]}${str[1]}`))
//         decode = decode.concat(numDecodingsCombos(str.slice(2)).map(result => `${decoder(`${str[0]}${str[1]}`)}${result}`))
//     return decode
// }

// const decoder = (str) => {
//     if(parseInt(str) > 26) return ""
//     return String.fromCharCode(parseInt(str) + 64)
    
// }

//do not generate all answers

const numDecodings = (str, cache = {}) => {
    if(cache[str]) return cache[str]
    if(!str) return 1
    if(str[0] === "0") return 0
    let solutions = 0
    cache[str.slice(1)] = cache[str.slice(1)] || numDecodings(str.slice(1), cache)
    solutions += cache[str.slice(1)]
    if(str.length > 1 && decoder(`${str[0]}${str[1]}`)) {
        cache[str.slice(2)] += cache[str.slice(2)] || numDecodings(str.slice(2), cache)
        solutions += cache[str.slice(2)]
    }
    cache[str] = solutions
    return cache[str]
}

const decoder = (str) => {
    if(parseInt(str) > 26) return ""
    return String.fromCharCode(parseInt(str) + 64)
    
}

console.log(numDecodings("124"))
