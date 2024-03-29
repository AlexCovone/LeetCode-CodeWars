// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) {
    if(n < 10) return n;

    n.toString()
    let sum = 0
    
    for(let i = 0; i < n.length; i++){
        sum += Number(n[i])
    }

    return digitalRoot(sum)
  }