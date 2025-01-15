// Your task is to write a function that takes a string and return a new string with all vowels removed.

// y is not considered vowel
// str can contain upper and lowercase
// "This website is for losers LOL!" -> "Ths wbst s fr lsrs LL!"

// export class Kata {
//   static disemvowel(str: string): string {
//     const vowels: string[] = ["a", "e", "i", "o", "u"];

//     let strArr = str.split("");

//     for (let i = 0; i < strArr.length; i++) {
//       const currentValue: string = strArr[i];

//       if (vowels.includes(currentValue.toLowerCase())) {
//         strArr.splice(i, 1);
//       }
//     }

//     return strArr.join("");
//   }
// }

export class Kata {
  static disemvowel(str: string): string {
    const vowels: string[] = ["a", "e", "i", "o", "u"];

    return str
      .split("")
      .filter((letter) => !vowels.includes(letter.toLowerCase()))
      .join("");
  }
}
