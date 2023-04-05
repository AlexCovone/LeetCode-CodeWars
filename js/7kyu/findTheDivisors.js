/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

function divisors(integer){
    let result = []

    for(let i = 2; i < integer; i++){
        if(integer % i === 0){
            result.push(i)
        }
    }

    if(result.length){
        return result
    }else{
        return `${integer} is prime`
    }
}

// P - integer > 1
// R - array of integer's divisors in asc order (do not include 1 or integer itself)
// E - 12 => [2, 3, 4, 6], 13 => '13 is prime' -- (if integer is prime, return string)
// P - Identify if integer is prime, loop from 2 to < num and find if num is divisible by iterator. If arr is empty, integer is prime