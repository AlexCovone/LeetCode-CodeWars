// Find the sum of all multiples of n below m

// n and m are natural numbers - positive integers
// m is not inclusive
// return number type - sum of multiples from n up to m


function sumMul(n, m) {
    // if n is not positive or 0, return invalid
    if(n < 1 || m < 1){return 'INVALID'}

    // sum will always include n
    let sum = n

    // start loop at n + 1 since n is inclusive
    for(let i = n + 1; i < m; i++){

        // check if i is a multiple of n - if so, add it to sum
        if(i % n === 0){
            sum += i
        }
    }

    return sum
}

// Optimized
function sumMul(n, m){
    if(n < 1 || m < 1){return 'INVALID'}
    let sum = 0

    // iterate over loop by n - no need to check for multiple if iterate by n
    for(let i = n; i < m; i+=n){
        sum += i
    }
    return sum
}

// sumMul(2, 9) -> 20 (2 + 4 + 6 + 8)
// sumMul(3, 13) -> 30 (3 + 6 + 9 + 12)
// sumMul(4, -7) -> 'INVALID" 

