/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers){
    let numbers1 = numbers.split(' ')
    return `${Math.max(...numbers1)} ${Math.min(...numbers1)}`
}


// Using Map Method
function highAndLow1(numbers){
    let strArr = numbers.split(' ').map(element => Number(element)).sort((a, b) => b - a)

    return String(strArr[0] + ' ' + String(strArr[strArr.length - 1]))
}