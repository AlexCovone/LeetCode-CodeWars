// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function outlier(arr){
    let evenArr = arr.filter(num => num % 2 === 0)
    let oddArr = arr.filter(num => num % 2 !== 0)

    return evenArr.length === 1 ? evenArr[0] : oddArr[0]
}

// Loop through array once
function findOutlier(array){
    let evenCount = 0
    let oddCount = 0
    let lastOdd = 0
    let lastEven = 0

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            eventCount++
            lastEven = array[i]
        }else{
            oddCount++
            lastOdd = array[i]
        }
    }

    if((evenCount > 1 && oddCount === 1) || (oddCount > 1 && evenCount === 1)){
        return evenCount > oddCount ? lastOdd : lastEven
    }
}