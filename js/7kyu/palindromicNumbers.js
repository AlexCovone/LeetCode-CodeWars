// Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.

function convertPalindromes(numbers) {
    return numbers.map(n => n === n.toString().split('').reverse().join('') * 1 ? 1 : 0)
};

function convertPalindromes(numbers){
    return numbers.map(n => Number(n.toString() === n.toString().split('').reverse().join('')))
    // Can add ? 1 : 0
}

// P - arr of numbers
// R - arr of 1s and 0s; 1 if num is palindrome, 0 if num is not
// E - [101, 2, 85, 33, 1404] = [1, 1, 0, 1, 0]
// P - grab each num, reverse - if num === reverse num ? 1 : 0