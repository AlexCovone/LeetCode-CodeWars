/*
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
*/

// operations is []:string of 1 of 4 operations (++X, X++, --X, X--) - no lowercase
// return final value of x based on total increment && decrement

// operations will always have length between 1 and 100

var finalValueAfterOperations = function (operations) {
  // create match object
  const match = {
    "--X": -1,
    "X--": -1,
    "++X": 1,
    "X++": 1,
  };

  // initialize answer to 0
  let ans = 0;

  // iterate through operation and match to created object
  for (const operation of operations) {
    ans += match[operation];
  }

  // return answer
  return ans;
};

// Alternative with O(1) space complexity
var finalValueAfterOperations = function (operations) {
  let ans = 0;
  for (const operation of operations) {
    if (operation === "X++" || operation === "++X") {
      ans++;
    } else {
      ans--;
    }
  }
  return ans;
};

// operations = ["--X", "X++", "X++"] => 1 because -1, 0, 1
// operations = ["++X", "++X", "X++"] => 3 because 1, 2, 3
// operations = ["X++", "++X", "--X", "X--"] => 0 because 1, 2, 1, 0
