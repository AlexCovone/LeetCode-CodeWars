/*
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
*/

function solution(digits){
    let answer = 0;
    
    for (let i = 0; i < digits.length; i++) {
      let number = digits.slice(i, i + 5); 
      if (Number(number) > answer) {       
        answer = Number(number);
      }
    }
    return answer;
}


// P - number with type of string (e.g '12345')
// R - Five digit integer (type number) that is greatest sequence of five consecutive digits in argument
// E - '1234567898765' => 98765
// P - Create 0 var, loop through digits array - create variable where it takes 5 digits of digits array, if that variable is greater than 0 var, reassign var