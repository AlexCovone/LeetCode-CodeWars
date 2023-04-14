// roman numeral is string, always listed symbols, no special characters, length up to 15, no negatives

// return converted value from roman numeral to int (type number)

// romanNum = 'III' -> 3
// romanNum = 'LVII' -> 58, L = 50, V = 5, III = 3
// romanNum = 'MCMXCIV' -> 1994, M = 1000, CM = 900, XC = 90, IV = 4

function romanNumberConversion(romanNum){
    // define obj with roman numeral conversions
    const values = {
      'I' : 1,
      'V' : 5,
      'X' : 10, 
      'L' : 50,
      'C' : 100,
      'D' : 500,
      'M' : 1000
    }
    
    // break input apart - split
    let intValuesArr = romanNum.split('').map(el => values[el])
    
    // loop though array - check if need to subtract value, if not, then add
    let sum = 0
  
    for(let i = 0; i < intValuesArr.length; i++){
      let currentValue = intValuesArr[i]
      let nextValue = intValuesArr[i + 1]
  
      // check if need to subtract
      if(currentValue < nextValue){
        sum -= currentValue
      }else{
        sum += currentValue
      }
    }
    return sum
  }
  
  // Alternative (more efficient) w/o converting to array
  function romanNumberConversion(romanNum){
      const values = {
      'I' : 1,
      'V' : 5,
      'X' : 10, 
      'L' : 50,
      'C' : 100,
      'D' : 500,
      'M' : 1000
    }
  
    let sum = 0
    for(let i = 0; i < romanNum.length; i++){
      if(values[romanNum[i]] < values[romanNum[i + 1]]){
        sum -= values[romanNum[i]]
      }else{
        sum += values[romanNum[i]]
      }
    }
    return sum
  }
  
  
  console.log(romanNumberConversion('III'), '3')
  console.log(romanNumberConversion('LVIII'), '58')
  console.log(romanNumberConversion('MCMXCIV'), '1994')