// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let arr = str.toLowerCase().split('')

    return arr.filter(element => element === 'x').length === arr.filter(element2 => element2 === 'o').length;
}