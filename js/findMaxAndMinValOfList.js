/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
*/

function min(list){
    let sortedList = list.sort((a, b) => a-b)

    return sortedList[0]
}

function max(list){
    let sortedList = list.sort((a, b) => a-b)

    return sortedList[sortedList.length - 1]
}

// Alternate Max
function max(list){
    let sortedList = list.sort((a, b) => b-a)
    return sortedList[0]
}