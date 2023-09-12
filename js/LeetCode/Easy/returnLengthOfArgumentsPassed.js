// Write a function argumentsLength that returns the count of arguments passed to it.

// ------------------------------------------------------------

// return count (type: number) of arguments passed through function

// args will be between 0 and 100 (theoretically could be indefinite)

// achieve in constant O(1) time

var argumentsLength = function (...args) {
  return arguments.length;
};

// argsArr = [5] => return 1
// argsArr = [{}, null, '3'] => return 3
// argsArr = [{a: 1, b: 2}, 0, 42, 'test', 'length'] => return 5

console.log(argumentsLength(5), 1);
console.log(argumentsLength({}, null, '3'), 3);
console.log(argumentsLength({ a: 1, b: 2 }, 0, 42, 'test', 'length'), 5);
