// You will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// -------------------------------------------------

// s type:string
// can be any length - need to return type:number that is the largest grouping
// grouping must be consecutive


function solve(s) {
    let maxNumber = 0;
    let currentNumber = 0;

    for (const char of s) {
        if (Number.isInteger(+char)) {
            // Multiplication by 10 shifts currentNumber to the left by 1 decimal place to allow for combining consecutive digits correctly
            currentNumber = currentNumber * 10 + (+char);
        } else {
            // check and reassign maxNumber to either the currentNumber or the stored maxNumber
            maxNumber = Math.max(maxNumber, currentNumber);

            // reset currentNumber to 0
            currentNumber = 0;
        }
    }

    // Check one more time after the loop in case the largest number is at the end of the string.
    maxNumber = Math.max(maxNumber, currentNumber);

    return maxNumber;
}


// "gh12cdy695m1" => 695
// "2ti9iei7qhr5" => 9
// "vih61w8oohj5" => 61
// "f7g42g16hcu5" => 42
// "lu1j8qbbb85" => 85

console.log(solve("gh12cdy695m1"), 695);
console.log(solve("2ti9iei7qhr5"), 9);
console.log(solve("vih61w8oohj5"), 61);
console.log(solve("f7g42g16hcu5"), 42);
console.log(solve("lu1j8qbbb85"), 85);
