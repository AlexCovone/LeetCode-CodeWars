// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string.

// -----------------------------------------------

// string type:string, length >= 1

// return string type:string - exclamation removed, except at end of string

function remove(string) {
  return string.split('!').join('') + '!';
}

// 'Hi!' => 'Hi!'
// 'Hi!!!' => 'Hi!'
// '!Hi' => 'Hi!'
// '!Hi!' => 'Hi!'
// 'Hi! Hi!' => 'Hi Hi!'
// 'Hi' => 'Hi!'

console.log(remove('Hi!'), 'Hi!');
console.log(remove('Hi!!!'), 'Hi!');
console.log(remove('!Hi'), 'Hi!');
console.log(remove('!Hi!'), 'Hi!');
console.log(remove('Hi! Hi!'), 'Hi!');
console.log(remove('Hi'), 'Hi!');
