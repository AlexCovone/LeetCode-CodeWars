/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

function maskify(cc) {
  cc = cc.split('');

  for (let i = 0; i < cc.length - 4; i++) {
    cc[i] = '#';
  }

  return cc.join('');
}

// Alternative for readability

function maskify(str) {
  // Check if the string is empty or has a length of 1
  if (str.length <= 1) {
    return str;
  }

  // Extract the last four characters of the string
  const lastFourCharacters = str.slice(-4);

  // Create a string of '#' characters with a length equal to (str.length - 4)
  const maskedPart = '#'.repeat(str.length - 4);

  // Concatenate the masked part with the last four characters
  const maskedString = maskedPart + lastFourCharacters;

  return maskedString;
}
