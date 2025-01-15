// Return the number (count) of vowels in the given string.

// do not count y
// input: string, only be lowercase and/or spaces
// 'abracadabra' -> 5

export class Kata {
  static getCount(str: string): number {
    let count: number = 0;
    const vowels: string[] = ["a", "e", "i", "o", "u"];

    for (const char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }

    return count;
  }
}
