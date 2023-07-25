// Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

function powerOf4(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
    return false;
  }

  while (n !== 1) {
    if (n % 4 !== 0) {
      return false;
    }

    n /= 4;
  }

  return true;
}

// Alternative

function powerOf4(n){
    return Number.isInteger(n) && Number.isInteger(Math.log(n) / Math.log(4))
}