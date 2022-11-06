// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(n){
   Math.ceil(n / 5) * 5 
  }

// While loop
function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
  }