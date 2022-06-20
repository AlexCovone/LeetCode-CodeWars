// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    // Split array into single words
    let arrWord = str.split(' ');

    // Concatnate 
    return arrWord.map(element => {
        const firstLetter = element[0];
        return element.slice(1) + firstLetter + 'ay'
    }).join(' ')
  }