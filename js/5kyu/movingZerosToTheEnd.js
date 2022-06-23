// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    let filteredList = arr.filter(element => element !== 0)
    let zeroList = arr.filter(element => element === 0)

    return filteredList.concat(zeroList)
  }