/*
Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (string) {
    //create obj
    let countObject = {}
    //loop -> check if val exist ? val++ : val = 1
    for(const char of string){
        if( countObject[char] ){
            countObject[char] ++
        }else{
            countObject[char] = 1
        }
    }
    return countObject
}

console.log(count('aba'), "{'a': 2, 'b': 1}")
console.log(count('dog'), "{'d': 1, 'o': 1, 'g': 1}")
console.log(count('abba'), "{'a': 2, 'b': 2}")