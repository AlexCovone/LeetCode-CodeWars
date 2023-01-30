/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

function isVow(a){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelsCode = vowels.map(el => el.charCodeAt())
    let result = []

    for(let i = 0; i < a.length; i++){
        if(vowelsCode.includes(a[i])){
            result.push(String.fromCharCode(a[i]))
        }else{
            result.push(a[i])
        }
    }

    return result
}

// Alternative

const isVow = a =>{
    let map = {
      97: 'a',
      101: 'e',
      105: 'i',
      111: 'o',
      117: 'u',
    }
    return a.map( num => map[num] ? map[num] : num);
  }