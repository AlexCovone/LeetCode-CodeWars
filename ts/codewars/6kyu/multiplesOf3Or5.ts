// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// ----

// arg: number
// can be positive or negative

// return sum: number of multiples of 3 or 5
// if number is multiple of both 3 and 5, count only once

export class Challenge {
  static solution(number: number) {
    if (number < 0) {
      return 0;
    }

    let total: number = 0;

    for (let i: number = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        total += i;
      }
    }

    return total;
  }
}
