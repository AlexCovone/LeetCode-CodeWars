// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

const multipleOfIndex = array => {
    return array.filter((function(el, idx) {
        return el % idx === 0
    }))
}