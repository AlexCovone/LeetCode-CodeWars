// Write function RemoveExclamationMarks which removes all exclamation marks from a given string. Avoid using regex.

function removeExclamationMarks(s) {
    return s.split('!').join('')
  }

// Alternative Method using regex
const removeExclamationMarks = s => s.replace(/!/g,"")