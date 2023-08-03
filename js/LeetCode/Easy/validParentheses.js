/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(s) {
  // create stack to push/pop values on and off
  const stack = [];

  // create hashmap to store corresponding pair
  const mapping = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  // iterate through s length, check each char
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    // if current iterator is in hashmap key, push onto stack
    // can use .hasOwnProperty instead of in operator
    if (currentChar in mapping) {
      stack.push(currentChar);
    } else {
      // if current iterator is NOT in hashmap, pop last item off stack
      const top = stack.pop();

      // check if last item off stack is !== to current iterator, if so, exit and return false
      if (mapping[top] !== currentChar) {
        return false;
      }
    }
  }

  // if stack has length (e.g. ['(', '(', '(']), then return false
  return stack.length === 0;
}

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

// -----------------------------------------------------------------------------------------------------------------------------

// s: type string
// s.length >= 1
// s will only be parentheses -> (), [], {}

// Return boolean value whether s is valid or not

var isValid = function (s) {
  // s.length must be even
  if (s.length % 2 !== 0) {
    return false;
  }

  // create an obj mapping each parentheses match
  const match = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  // create empty arr -> stack
  const stack = [];

  // check if iterated value is an opening or closing parenthesis
  for (const val of s) {
    // if opening parenthesis -> put on stack
    if (val in match) {
      stack.push(val);
    } else {
      // if closing parenthesis -> look at last value on stack - see if iterated value === stack[last value]
      const top = stack.pop();
      if (val !== match[top]) {
        return false;
      }
    }
  }

  // exiting loop and empty stack would indicate each parenthesis has a valid match
  return stack.length === 0;
};

// s = '()' -> return true
// s = '()[]{}' -> return true
// s = '(]' -> return false
// s = '({[]})' -> return true

console.log(isValid('()'), true);
console.log(isValid('()[]{}'), true);
console.log(isValid('(]'), false);
console.log(isValid('({[]})'), true);
