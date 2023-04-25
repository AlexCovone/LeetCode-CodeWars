// Anagram: word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once

// s and t will never empty, always lowercase, no excess spacing, always one word, always 2 arguments

// s = 'anagram', t = 'nagaram' -> true
// s = 'rat', t = 'car' -> false
// s = 'livers', t = 'silver' -> true

// sort method - compare s and t if === -> true
// Time Complexity = O(s + t)
// Space Complexity = O(s + t)

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
}

// Alternative hashmap - store letters in hashmap, compare objs === -> true
// Time Complexity = O(s + t)
// Space Complexity = O(s + t)

function isAnagram(s, t) {
  // identify if lengths are same - letters used exactly once. If not same, return false
  if (s.length !== t.length) {
    return false;
  }

  // create 2 hashmaps to store s and t letters
  let sHash = {};
  let tHash = {};

  // populate hashmaps with counts of each character in s and t
  for (let i = 0; i < s.length; i++) {
    if (sHash[s[i]]) {
      sHash[s[i]]++;
    } else {
      sHash[s[i]] = 1;
    }

    if (tHash[t[i]]) {
      tHash[t[i]]++;
    } else {
      tHash[t[i]] = 1;
    }
  }

  // compare the contents of sHash and tHash
  for (let key in sHash) {
    if (sHash[key] !== tHash[key]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"), true);
console.log(isAnagram("rat", "car"), false);
console.log(isAnagram("livers", "silver"), true);
