/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

function twoSort(s){
    return s.sort()[0].split('').join('***')
}

function twoSort(s) {
    let sortedList = s.sort()
    let targetValue = sortedList[0]
    let result = ''


    for(let i = 0; i < targetValue.length; i++){
        if(targetValue[i] !== targetValue.slice(-1)){
            result += targetValue[i] + '***'
        }else{
            result += targetValue[i]
        }
    }
    return result
}

// P - string of words
// R - sort list, return first word with '***' between each letter. Type = string
// E - ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] => 'b***i***t***c***o***i***n'
// P - sort list of strings alphabetically. Grab first element, split into array, join with '***'
// loop through word, insert '***' between each character
