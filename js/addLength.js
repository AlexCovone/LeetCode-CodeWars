//What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array? Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element.

function addLength(str){
    let strArr = str.split(' ')

    return strArr.map(el => {
        return el + ' ' + el.length
    })
}