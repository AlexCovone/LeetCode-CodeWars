/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    // your code
    let s3 = s1 + s2;
    let arr = s3.split('');

    //if element is !== previous index, then it will be filtered into a new array
    arr = arr.sort().filter(function(element, index, array){
      return element !== array[index - 1];
    });

    return arr.join('');
  }

