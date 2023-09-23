// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function delimitCamelCasing(str) {
  // initialize result to append chars
  let result = '';

  // initialize var on whether to capitalize next char
  let capitalizeNext = false;

  // iterate through entire lenght of str
  for (let i = 0; i < str.length; i++) {
    let currentValue = str[i];

    // check if current iterative is - or _, if true, capitalize next char - do not append any char
    if (currentValue === '-' || currentValue === '_') {
      capitalizeNext = true;
    } else {
    // if char is not - or _ : check if capitalize var is true, if true append capitalize char, change var to false
      if (capitalizeNext) {
        result += currentValue.toUpperCase();
        capitalizeNext = false;
      } else {
        // if not true, append char with no uppercase
        result += currentValue.toLowerCase();
      }
    }
  }

  return result;
}

function toCamelCase(str) {
  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i];

    if (letter === '-' || letter === '_') {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr[i] = '';
    }
  }
  return arr.join('');
}
