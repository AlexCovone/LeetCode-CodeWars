//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b. Note: a and b are not ordered!

function getSum(a, b){
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let sum = 0

    for(let i = min; i <= max; i++){
        sum += i
    }
    return sum
}