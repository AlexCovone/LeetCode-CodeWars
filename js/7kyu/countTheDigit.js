/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
*/

function nbDig(n, d) {
    let numOfDigit = 0;
  
    for(let i = 0; i <= n; i++) {
      numOfDigit += (i**2).toString().split('').filter(n => n == d).length;
    }
      
    return numOfDigit;
}