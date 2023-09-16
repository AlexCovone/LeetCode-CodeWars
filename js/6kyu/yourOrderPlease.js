// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// --------------------------------------------------------------------------------

// input type:string, multiple words with one num in each word. Num will be sequential
// 0 < num < 10
// return type:string => words sorted, num dictates position in string

function order(words) {
  // Convert string to arr - each word = element
  const wordArr = words.split(' ');

  // create hashmap to store word:num
  const hashmap = {};

  // iterate through words - use num in word as value pair
  for (const word of words) {
    console.log(parseInt(word))
    hashmap[word] = parseInt(word);
  }

  const sortedWords = wordArr.sort((a, b) => hashmap[a] - hashmap[b]);

  return sortedWords.join(' ')
}

// "is2 Thi1s T4est 3a" => "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2" => "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  =>  ""

console.log(order('is2 Thi1s T4est 3a'), 'Thi1s is2 3a T4est');
console.log(order('4of Fo1r pe6ople g3ood th5e the2'), 'Fo1r the2 g3ood 4of th5e pe6ople');
console.log(order(''), '');
