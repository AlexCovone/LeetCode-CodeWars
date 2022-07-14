/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
*/

function sumArray(array){
    if(array && array.length > 1){
        let newArr = array.sort((a, b) => a-b).slice(1, -1)

        return newArr.reduce((acc, c) => acc + c, 0)
    }
        return 0
}
