// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

function gimme(triplet){
    return triplet.indexOf(triplet.slice().sort((a, b) => {return a - b})[1])
}

// Alternative
function gimme ([a, b, c]) {
    const max = Math.max(a, b, c);
    const min = Math.min(a, b, c);
    if (a !== max && a !== min) return 0;
    if (b !== max && b !== min) return 1;
    return 2;
}