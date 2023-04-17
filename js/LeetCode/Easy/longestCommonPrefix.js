// arr of words, each el is a word - only 1 word, no special chars, type of all words string, never empty arr, always lowercase

// return longest common prefix, type string. If no common prefix, return empty string

// ['flower', 'flow', 'flight'] -> 'fl'
// ['dog', 'racecar', 'car'] -> ''
// ['mouse', 'mouth', 'mound'] -> 'mou'

function longestCommonPrefix(strs){
    // check if str arr is empty
    if(strs.length === 0){return ''}
  
    // sort arr lexicographically
    strs.sort()
    let prefix = ''
  
    // loop through first sorted word
    for(let i = 0; i < strs[0].length; i++){
  
      // check if first word letters !== last word letter - break and move on if not
      if(strs[0][i] !== strs[strs.length - 1][i]){
        break;
      }
      // if first word letters and last word letter match, append to prefix variable
      prefix += strs[0][i]
    }
    return prefix
  }
  
  console.log(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl')
  console.log(longestCommonPrefix(['dog', 'racecar', 'car']), '')
  console.log(longestCommonPrefix(['mouse', 'mouth', 'mound']), 'mou')