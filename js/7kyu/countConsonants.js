/*
Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

This function is written to intake a string with one word
*/

// Regex
const consonantCount = str => str.replace(/[^a-z]|[aeiou]/gi, '').length;

// Does not account for spaces / special characters
function consonantCount(str) {
    str = str.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let sumConsonant = 0

    for(let char of str){
        if(!vowels.includes(char)){
            sumConsonant++
        }
    }
    return sumConsonant
}