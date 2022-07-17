// Given a non-empty array of integers, return the result of multiplying the values together in order.

const grow = x => x.reduce((acc, c) => acc * c, 1)


// Alternative
function grow(x){
    let starter = 1

    for(let i = 0; i < x.length; i++){
        starter *= x[i]
    }

    return starter
}