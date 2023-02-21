/* You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
*/

// Abstracted reduce with reducer
function findEvenIndex(arr){
    let left = 0
    let right = 0
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    if(arr.length === 0){return -1};

    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            right = arr.slice(1).reduce(reducer, 0) // Same as: right = arr.slice(1).reduce((acc, c) => acc + c, 0)
            if(right === i){
                return i;
            }
        }else{
            left = arr.slice(0, i).reduce(reducer, 0);
            right = arr.slice(i + 1).reduce(reducer, 0);
            if(left === right){
                return i
            }
        }
    }
    return -1
}

// Initial
function findEvenIndex(arr){
    let left = 0
    let right = 0


    if(arr.length === 0){return -1};

    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            right = arr.slice(1).reduce((acc, c) => acc + c, 0) // Same as: right = arr.slice(1).reduce((acc, c) => acc + c, 0)
            if(right === i){
                return i;
            }
        }else{
            left = arr.slice(0, i).reduce((acc, c) => acc + c, 0);
            right = arr.slice(i + 1).reduce((acc, c) => acc + c, 0);
            if(left === right){
                return i
            }
        }
    }
    return -1
}