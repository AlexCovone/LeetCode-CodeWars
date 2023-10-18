// convert uppercase to lowercase, remove non-alphanumeric chars, s.length >= 1, s on ASCII chars, ' ' = true

// return true if phrase reads the same forward and back

// 'A man, a plan, a canal: Panama' -> true. 'amanaplanacanalpanama' is a palindrome
// 'race a car' -> false. 'raceAcar'
// ' ' -> true.

function isPalindrome(s) {
  if (!s.length) {
    return true;
  }

  // Remove any non-alphanumeric characters
  const alphanumericChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (alphanumericChars.includes(char)) {
      result += char;
    }
  }

  const reverse = result.split('').reverse().join('');

  return result === reverse;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'), true);
console.log(isPalindrome('race a car'), false);
console.log(isPalindrome(' '), true);
