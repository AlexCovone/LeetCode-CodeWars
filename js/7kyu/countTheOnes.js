// The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number.

// ------------------------------------------------------------------------------------

function hammingWeight(x) {
  // initialize count for 1's
  let count = 0;

  while (x > 0) {
    // check if least significant bit is a 1
    count += x & 1;

    // shift and reassign number by 1 bit to check next bit
    x >>= 1;
  }
  return count;
}

// 10 => 1010, return 2
// 21 => 10101, return 3
// 56 => 111000, return 3
// 1000 => 1111101000, return 6

console.log(hammingWeight(10), 2);
console.log(hammingWeight(21), 3);
console.log(hammingWeight(56), 3);
console.log(hammingWeight(1000), 6);
