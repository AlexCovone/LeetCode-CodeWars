/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
*/

function past(h, m, s){
    var miliseconds = 0;
    miliseconds = miliseconds + s * 1000;
    miliseconds = miliseconds + m * 60000;
    miliseconds = miliseconds + h * 3600000;
    return miliseconds;
  }
