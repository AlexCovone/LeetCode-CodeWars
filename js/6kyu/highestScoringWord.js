/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/


function high(x) {
    // ['man', 'i', 'need', 'a', 'taxi', 'up', 'to', 'ubud']
    const words = x.split(' ');
  
    // [28, 9, 28, 1, 54, 37, 35, 48]
    const scores = words.map(word => {
      const charCodes = word.split('').map(char => char.charCodeAt(0) - 96);
      return charCodes.reduce((sum, score) => sum + score, 0);
    });
  
    // 54
    const maxScore = Math.max(...scores);

    // 4
    const maxIndex = scores.indexOf(maxScore);
    //const maxIndex = scores.indexOf(Math.max(...scores))
  
    // words[4]
    return words[maxIndex];
}

// P - Array of words, all letters lowercase (str)
// R - highest scoring word (str), score based on letter position in alphabet - a = 1, b = 2 ... (if two words score same, return earlier one)
// E - 'what time are we climing up the volcano' => 'volcano' = 70: 'v' = 22, 'o' = 15, 'c' = 3, 'a' = 1, 'n' = 14, 'o' = 15
// P - letters assigned value (loop?), split str into individual words => split words into individual letters, accumulate letter values for word total, compare word total and return largest val word

