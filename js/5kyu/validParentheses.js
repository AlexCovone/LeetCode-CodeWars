/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

function validParentheses(parens) {
    let n = 0;

    for(let i = 0; i < parens.length; i++){
        if(parens[i] === '(') n++;
        if(parens[i] === ')') n--;

        // Checks to see if there is a closing parenthesis (-1) initially without seeing an opening one (+1) on each iteration. 
        if(n < 0) return false;
    }

    return n === 0 ? true : false
  }