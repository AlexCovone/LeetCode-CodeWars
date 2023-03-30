/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

function insertDash(num){
    let stringNum = num.toString()
    let result = stringNum[0]

    for(let i = 1; i < stringNum.length; i++){
        if(stringNum[i - 1] % 2 !== 0 && stringNum[i] % 2 !== 0){
            result += '-'
        }
        result += stringNum[i]
    }
    return result
}

// P - non-negative integer, num >= 0. 0 !== odd
// R - string with dash between 2 odd numbers
// E - 454793 => 4547-9-3
// P - Num to string, declare var to be first num, loop through starting with index 1, check if num before and current num is odd, if both odd, add '-', else concatenate two string nums

// 454793 => '454793' => stringNum[0] = '4'
// Loop starting with index 1
// if('4' is odd && '5' is odd) => '4' += '-' += '5' ----- False => '4' += '5'
// return result

// Alternative
function insertDash(num) {
    return num.toString().split('').reduce((acc, c, i, arr) => {
      if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
        acc = acc + '-';
      
      return acc + c;
    }, '');
}

// 454793 => '454793' => ['4', '5', '4', '7', '9', '3']
// if 1(index) > 0 && Number['5'] is odd && Number['4'] is odd => value + '-'


