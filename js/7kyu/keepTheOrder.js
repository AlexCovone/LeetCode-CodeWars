/*
Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

Do not modify the input.

Some examples:
keepOrder([1, 2, 3, 4, 7], 5) //=> 4
                      ^(index 4)
keepOrder([1, 2, 3, 4, 7], 0) //=> 0
          ^(index 0)
keepOrder([1, 1, 2, 2, 2], 2) //=> 2
                ^(index 2)
*/

function keepOrder(ary, val){
    for(let i = 0; i < ary.length; i++){
        if(val >= (ary[i - 1] ?? -Infinity) && val <= (ary[i] ?? Infinity)){
            return i
        }
    }
    return ary.length
}


// P - arr of nums sorted in asc order, val = num to insert into arr
// R - Return index where val can be inserted with the arr still being correctly sorted - if === to el, must be inserted into lowest index
// E - ([1, 2, 3, 4, 7], 5) => Index 4 - between el 4 and el 7
// E - ([1, 1, 2, 2, 2], 2) => Index 2 - between el 1 and el 2
// E - ([1, 2, 3, 4], -1) => Index 0 


// P - find the index where val can insert while maintaining order
// Val must be >= ary[i - 1] && <= ary[i]
// Loop through ary - if val >= ary[i - 1] or negative inf AND val <= ary[i] or inf - return index
// If none true, index will be last el on ary, so ary.length