/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function duplicateEncode(str) {
  str = str.toLowerCase();
  const charMap = {};
  let result = '';

  for (const char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
    result += charMap[char] > 1 ? ')' : '(';
  }

  return result;
}

function duplicateEncode(word) {
  let wordArr = word.toLowerCase().split('');

  return wordArr
    .map((element) => {
      if (wordArr.indexOf(element) === wordArr.lastIndexOf(element)) {
        return '(';
      } else {
        return ')';
      }
    })
    .join('');
}

// Alternative
function duplicateEncode(word) {
  let wordArr = word.toLowerCase().split('');
  return wordArr
    .map((element) => {
      return wordArr.indexOf(element) === wordArr.lastIndexOf(element) ? '(' : ')';
    })
    .join('');
}

// Alternative 2
function duplicateEncode(str) {
  return str
    .toLowerCase()
    .split('')
    .map((letter, index, array) => (array.indexOf(letter) === array.lastIndexOf(letter) ? '(' : ')'))
    .join('');
}

