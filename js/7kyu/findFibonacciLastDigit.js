// As you probably know, Fibonacci sequence are the numbers in the following integer sequence: 1, 1, 2, 3, 5, 8, 13... Write a method that takes the index as an argument and returns last digit from fibonacci number.

// ----------------------------------------------------------

// given random index:number

// return last digit of the fibonacci num at the specified index type:number

function getLastDigit(index) {
  // initialize fibonacci sequence
  const fibonacciSequence = [0, 1];

  for (let i = 2; i <= index; i++) {
    const value1 = fibonacciSequence[i - 1];
    const value2 = fibonacciSequence[i - 2];

    // store only last digit in array - extract last digit using mod 10
    const nextLastDigit = (value1 + value2) % 10;

    fibonacciSequence.push(nextLastDigit);
  }

  const lastDigit = fibonacciSequence[index];

  return lastDigit;
}

// Optimize for space complexity
function getLastDigit(index) {
  if (index <= 1) {
    return index;
  }

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= index; i++) {
    const next = (prev + current) % 10;
    prev = current;
    current = next;
  }

  return current;
}

// 15 => fib num = 610 => return 0
// 193150 => return 5
// 300 => return 0
// 20001 => return 6

console.log(getLastDigit(15), 0);
console.log(getLastDigit(193150), 5);
console.log(getLastDigit(300), 0);
console.log(getLastDigit(20001), 6);
