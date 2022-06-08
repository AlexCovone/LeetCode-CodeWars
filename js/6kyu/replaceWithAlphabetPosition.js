/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return text.toLowerCase().split('').filter(element => {
        let index = alphabet.indexOf(element);

        return index >= 0;
    })
    .map(element => alphabet.indexOf(element) + 1)
    .join(' ')
}