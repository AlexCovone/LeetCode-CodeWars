// Complete the solution so that the function will break up camel casing, using a space between words.

// complete the function
function solution(string) {
    string = string.split('').map(element => {
      if(element === element.toUpperCase()){
        element = ' ' + element
      }
      return element
    })
    return string.join('')
  }
