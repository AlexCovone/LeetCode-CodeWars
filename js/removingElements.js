// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

const removeEveryOther = arr => arr.filter((element, index) => index % 2 === 0)