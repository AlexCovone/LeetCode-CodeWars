// Find the number of Friday 13th in the given year.

// --------------------------------------------------

// input is year:number
// output: number of Friday 13th in the year: number

function unluckyDays(year) {
  // initialize amount of friday 13th count
  let unluckyCount = 0;

  // iterate through months in a year (1-12, zero-index)
  for (let i = 0; i < 12; i++) {
    // create date object for 13th day in the month
    const date = new Date(year, month, 13);

    // check if 13th day falls on fifth day (friday)
    if (date.getDay() === 5) {
      unluckyCount++;
    }
  }

  return unluckyCount;
}

// 2015 => 3
// 1986 => 1
// 2819 => 2
// 2065 => 3

console.log(unluckyDays(2015), 3);
console.log(unluckyDays(1986), 1);
console.log(unluckyDays(2819), 2);
console.log(unluckyDays(2065), 3);
