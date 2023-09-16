// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// --------------------------------------------------------------------------------

// input type:string, multiple words with one num in each word. Num will be sequential
// 0 < num < 10
// return type:string => words sorted, num dictates position in string

function order(words){
    // create helper function - takes word, find num as type:string, convert to type:number
    // look for first char that +char converts into a number - check with Number.isInteger()
    const numerate = word => word.split('').find(char => Number.isInteger(+char))

    // turn str of words into arr of words => sort using helper function, asc order, join arr to string
    return words.split(' ').sort((a, b) => numerate(a) - numerate(b)).join(' ')
}

// "is2 Thi1s T4est 3a" => "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2" => "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  =>  ""

console.log(order('is2 Thi1s T4est 3a'), 'Thi1s is2 3a T4est');
console.log(order('4of Fo1r pe6ople g3ood th5e the2'), 'Fo1r the2 g3ood 4of th5e pe6ople');
console.log(order(''), '');

