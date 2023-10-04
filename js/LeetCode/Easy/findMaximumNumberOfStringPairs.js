/*
You are given a 0-indexed array words consisting of distinct strings.

The string words[i] can be paired with the string words[j] if:

The string words[i] is equal to the reversed string of words[j].
0 <= i < j < words.length.
Return the maximum number of pairs that can be formed from the array words.
*/

// -------------------------------------------------------------

// words array with distinct strings - word:string[]
// no duplicates in words
// words.length >= 1 && <= 50
// each iterative will only have a length of 2, only lowercase chars, no spaces/special chars/etc
// each string can only be in one pair at most

// return max num of pairs that can be formed - type:number

// Time Complexity - O(n)
var maximumNumberOfStringPairs = function (words) {
  // keep track of max pairs
  let maxPairs = 0;
  // track words that can form pairs - sets cannot have duplicates
  const wordSet = new Set();

  // iterate through words
  for (let i = 0; i < words.length; i++) {
    // if first char is larger than second char, swap - else, return as is
    const sortedWord = words[i][0] > words[i][1] ? words[i][1] + words[i][0] : words[i];

    // check if set has sorted word - yes = increase count by 1 && remove from set => else, add to set
    if (wordSet.has(sortedWord)) {
      maxPairs++;
      wordSet.delete(sortedWord);
    } else {
      wordSet.add(sortedWord);
    }
  }
  return maxPairs;
};

// Time Complexity O(n^2)
var maximumNumberOfStringPairs = function (words) {
  // initialize hashmap
  const hashmap = {};

  // iterate through words arr
  for (const word of words) {
    // sort word in alphabetic order
    const sorted = word.split("").sort();
    // store newly sorted string in hashmap
    hashmap[sorted] ? hashmap[sorted]++ : (hashmap[sorted] = 1);
  }

  // return total num of value in hashmap
  return Object.values(hashmap).filter((val) => val > 1).length;
};

// words = ["cd","ac","dc","ca","zz"] => 2 - "cd" && "dc" + "ac" && "ca"
// words = ["ab","ba","cc"] => 1 - "ab" && "ba"
// words = ["aa","ab"] => 0

console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]), 2);
console.log(maximumNumberOfStringPairs(["ab", "ba", "cc"]), 1);
console.log(maximumNumberOfStringPairs(["aa", "ab"]), 0);
