// Write a function that accepts an integer n and returns a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = function(n) {
    let count = n

    return function() {
        const currentCount = count
        count++
        return currentCount
    };
};


// P - integer
// R - arr of integers where each element is +1 previous
// E - n = 10, 10, then 11, then 12 ... 
// P - take n and add 1 to it. Everytime function is called, add element to ending array