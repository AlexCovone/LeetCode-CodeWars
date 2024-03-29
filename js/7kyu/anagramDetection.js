/*
An anagram is the result of rearranging the letters of a word to produce a new word.
Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
*/

function isAnagram(test, original){
    test = test.toLowerCase().split('').sort().join('')
    original = original.toLowerCase().split('').sort().join('')
    return test === original
}