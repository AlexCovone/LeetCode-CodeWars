/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

function divCon(x){
    let numSum = x.filter(el => typeof el === 'number').reduce((acc, c) => acc + c, 0)
    let stringIntVal = x.filter(el => typeof el === 'string').map(el => Number(el)).reduce((acc, c) => acc + c, 0)

    return numSum - stringIntVal
}

// Alternative
function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }

// P - arr of integers & string integers
// R - number: sum non-string integers, subtract string integers
// E - [9, 3, '7', '3']: 2
// P - filter type, convert non-string integers to type:number, sum values