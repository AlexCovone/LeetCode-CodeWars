/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.*/ 

function number(array){
    for(let i = 0; i < array.length; i++){
        array[i] = [i + 1] + ': ' + array[i]
    }
    return array
}

// Map Method
function number(array){
    return array.map(function(element, index){
        return (index + 1) + ': ' + element;
    })
}