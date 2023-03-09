// When provided with a String, capitalize all vowels

function swap (string) {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    return string.split('').map(char => vowels.includes(char) ? char.toUpperCase() : char).join('')
}

function swap (string) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let word = ''

    for(char of string){
        if(vowels.includes(char)){
            word += char.toUpperCase()
          console.log(word)
        }else{
          word += char
        }
    }
    return word
}

