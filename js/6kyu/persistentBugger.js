/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num) {
    let count = 0
    let strNum = num.toString()

    if(strNum.length === 1){
        return 0
    }

    while(strNum.length !== 1){
        strNum = strNum.split('').reduce((acc, c) => acc * Number(c), 1).toString()
        count++
    }

    return count

}

// P - integer
// R - num of times we have to multiply to get single digit
// E - 39 => 3 * 9 = 27 => 2 * 7 = 14 => 1 * 4 = 4 --- multiple 3 times
// P - 
// convert num to string
// if num.length !== 1 => split string, convert to num, multiply values together
// run function again || while loop

// 39 => '39'
// ['3', '9']
// 27