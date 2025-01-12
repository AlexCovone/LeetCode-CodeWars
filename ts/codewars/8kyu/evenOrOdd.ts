// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// taking in a number
// return string of 'Even' or 'Odd'
// 1 -> 'Odd', 4 -> 'Even'

export function evenOrOdd(n: number): string {
  return n % 2 === 0 ? "Even" : "Odd";
}
