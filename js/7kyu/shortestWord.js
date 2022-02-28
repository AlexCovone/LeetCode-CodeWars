/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    let arr = s.split(' ');
    let smallestWord = arr[0];

    //Initialize at '1' to skip the first iteration where we compare the same word
    for (let i = 1; i < arr.length; i++) {
      if(arr[i].length < smallestWord.length){
        smallestWord = arr[i]; //smallestWord is reassigned to compared string arr[i] and used in future iterations 
      }
    }
    return smallestWord.length;
  }