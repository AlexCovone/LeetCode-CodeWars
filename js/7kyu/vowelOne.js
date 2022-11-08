// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

function vowelOne(s){
    s = s.toLowerCase()
    return s.split('').map(element => {
      if(element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u'){
        return 1
      }else{
        return 0
      }
    }).join('')
}

function vowelOne(s){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    s = s.toLowerCase()
    return s.split('').map(element => {
        return vowels.includes(element) ? 1 : 0
    }).join('')
}