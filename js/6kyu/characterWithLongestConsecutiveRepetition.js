/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
*/

function longestRepetition(s) { 
    let count = 0; 
    let longestCount = 0; 
    let currentChar = ''; 
    let longestChar = ''; 

  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== currentChar) { 
        count = 1;
        currentChar = s[i];
      } else {
        count++;
      }
  
      if (count > longestCount) {
        longestCount = count;
        longestChar = currentChar;
      }

    }
  
    return [longestChar, longestCount];
  }