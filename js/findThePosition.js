// When provided with a letter, return its position in the alphabet.

function position(letter) {
  const letterPosition = letter.toLowerCase().charCodeAt(0) - 96
  return `Position of alphabet: ${letterPosition}`
}
