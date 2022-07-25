// Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('')
  }