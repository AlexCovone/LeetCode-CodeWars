// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// strs: arr of strings: type string

// return arr of sub-arrs of anagrams grouped together

var groupAnagrams = function (strs) {
  // if strs.length = 0, return empty arr
  if(!strs.length){return []}

  // create hashmap to store anagrams
  const anagramMap = {};

  // iterate through strs arr
  for (const word of strs) {
    // each iterated word - split str into arr, sort it lexicographically, join back to type: string
    const sortedWord = word.split('').sort().join('');

    // check if sorted word is in hashmap
    // if not - create empty array for that sorted word key (ex: 'act' : [])
    if (!anagramMap[sortedWord]) {
      anagramMap[sortedWord] = [];
    }

    // Push current word into the array corresponding to the sorted word key in the hashmap
    anagramMap[sortedWord].push(word);
  }

  // Convert values of hashmap into an array
  return Object.values(anagramMap);
};

// strs = ["eat","tea","tan","ate","nat","bat"] -> return [["bat"],["nat","tan"],["ate","eat","tea"]]
// strs = [""] -> return [[""]]
// strs = ["a"] -> return [["a"]]

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']), [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]);
console.log(groupAnagrams(['']), [['']]);
console.log(groupAnagrams(['a']), [['a']]);
