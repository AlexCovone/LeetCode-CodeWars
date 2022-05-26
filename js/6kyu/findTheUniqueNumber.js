/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
*/

function findUniq(arr){
    return arr.find(element => arr.indexOf(element) === arr.lastIndexOf(element))
}

// Alternative
function findUniq(arr) {
    arr.sort((a,b)=>a-b);

    // pop removes the last element in the array and returns it
    return arr[0] === arr[1] ? arr.pop() : arr[0]
  }