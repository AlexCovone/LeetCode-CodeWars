// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Optimized
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str) {
    if(str.isEmpty){
      return true;
    }else{
      str = str.toLowerCase();
    }
 
    var array = str.split('');
    var sortedArr = array.slice().sort();
  
    for (var i = 0; i < array.length; i++) {
      if (sortedArr[i + 1] == sortedArr[i]) {
        return false;
      }
    }
    return true;
  }