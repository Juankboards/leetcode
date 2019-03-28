/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:

Input: "cbbd"
Output: "bb"
*/

//brute force
const longestPalindromeIterative = (str) => {
    let maxPalindromicSubstr = ""
    for(let i = 0; i < str.length - 1; i++) {
        let max = str[i]
        for(let j = i + 1; j <= str.length; j++) {
            if(isPalindromeIterative(max) && max.length >= maxPalindromicSubstr.length) maxPalindromicSubstr = max
            max = `${max}${str[j]}`
        }
    }
    return maxPalindromicSubstr  
}

const isPalindromeIterative = (str) => {
    let left = 0 
    let right = str.length - 1
    while(left < right) {
        if(str[left] !== str[right]) return false
        left++
        right--
    }
    return true
}

const longestPalindrome = (str) => {
    let palindromes = {}
    let max = {val: ""}
    isPalindrome(str, palindromes, max)   
    return max.val  
}

const isPalindrome = (str, palindromes, max) => {
    if(palindromes[str] !== undefined) return palindromes[str]
    if(str.length <= 1) {
        if(str.length >= max.val.length) max.val = str
        return palindromes[str] = true
    }

    if(str[0] !== str[str.length - 1]) palindromes[str] = false
    else palindromes[str] = isPalindrome(str.slice(1, str.length - 1), palindromes, max)
    if(palindromes[str] && str.length >= max.val.length) max.val = str

    isPalindrome(str.slice(0, str.length - 1), palindromes, max)
    isPalindrome(str.slice(1, str.length), palindromes, max)

    return palindromes[str]
}

const longestPalindromeCenter = (str) => {
    let max = ""
    for (var i = 0; i < str.length; i++) {
        let palindrome = isPalindromeCenter(str, i - 1, i + 1, max)        
        max = max.length <= palindrome.length? palindrome : max
    }
    return max || str[str.length - 1]
}

const isPalindromeCenter = (str, left, right, max) => {
    if(left < 0 && right > str.length - 1) return max
    left = left < 0? 0 : left
    right = right > str.length - 1? str.length - 1 : right
    if(str[left] === str[right]){
        substr = str.slice(left, right + 1)
        max = substr.length >= max.length? substr : max
        return isPalindromeCenter(str, left - 1, right + 1, max)
    }
    if(str[left + 1] === str[right]){
        substr = str.slice(left + 1, right + 1)
        max = substr.length >= max.length? substr : max
        return isPalindromeCenter(str, left, right + 1, max)
    }
    max = max.length <= 1? str[left + 1] : max
    return max
}