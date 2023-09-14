// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

// If the string's length is odd drop the central element.

// ------------------------------------------------------------

// input will be type:string
// return type:string - concat new string 1 letter from left, 1 letter from right, then 1 - increment each iteration
// case-sensitive
// if argument.length is odd, drop central element - find midpoint

function charConcat(string) {
  // initialize new string to append values to
  let result = '';

  // initialize count to keep track of number
  let count = 1;

  // iterate through string as long as string.length > 1
  while (string.length > 1) {
    // append first char + last char + count
    result += string.charAt(0) + string.charAt(string.length - 1) + count;

    // Reassign string - remove first and last char
    string = string.slice(1, -1);
    // increment count by 1
    count++;
  }

  return result;
}

// 'abcdef' => return 'af1be2cd3'
// 'abc!def' => return 'af1be2cd3'
// 'CodeWars' => return 'Cs1or2da3eW4'

console.log(charConcat('abcdef'), 'af1be2cd3');
console.log(charConcat('abc!def'), 'af1be2cd3');
console.log(charConcat('CodeWars'), 'Cs1or2da3eW4');
