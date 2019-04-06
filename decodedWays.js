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
const numDecodingsGenerating = (str) => {
    let solutions = numDecodingsCombos(str)
    return solutions.length
}

const numDecodingsCombos = (str) => {
    if(!str) return [""]
    let decode = numDecodingsCombos(str.slice(1)).map(result => `${decoder(str[0])}${result}`)
    if(str.length > 1 && decoder(`${str[0]}${str[1]}`))
        decode = decode.concat(numDecodingsCombos(str.slice(2)).map(result => `${decoder(`${str[0]}${str[1]}`)}${result}`))
    return decode
}

const decoder = (str) => {
    if(str[0] === "0" || !parseInt(str) || parseInt(str) > 26) return ""
    return String.fromCharCode(parseInt(str) + 64)    
}

//do not generate all answers

const numDecodings = (str, pointer = 0, cache = {}) => {   
    if(!str.length) return 0
    if(pointer === str.length) return 1
    if(cache[pointer]) return cache[pointer]
    let branch1 = validDigit(str[pointer])? numDecodings(str, pointer + 1, cache) : 0
    let branch2 = pointer < str.length -  1 && validDigit(`${str[pointer]}${str[pointer + 1]}`)? numDecodings(str, pointer + 2, cache) : 0
    cache[pointer] = branch1 + branch2
    return cache[pointer]
}

const validDigit = (str) => {
    if(str[0] === "0" || !parseInt(str) || parseInt(str) > 26) return false
    return true 
}

console.log(numDecodings("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"))

