/*
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

function sumNoDuplicates(numList) {
    const nonDuplicateList = numList.filter(number => numList.indexOf(number) === numList.lastIndexOf(number))
    return nonDuplicateList.reduce((acc, c) => acc + c, 0)
  }