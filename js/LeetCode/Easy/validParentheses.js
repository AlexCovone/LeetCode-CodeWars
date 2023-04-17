/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(s){
    // create stack to push/pop values on and off
    const stack = []
  
    // create hashmap to store corresponding pair
    const mapping = {
      '(':')',
      '[':']',
      '{':'}'
    }
  
    // iterate through s length, check each char
    for(let i = 0; i < s.length; i++){
      const currentChar = s[i]
  
      // if current iterator is in hashmap, push onto stack
      if(currentChar in mapping){
        stack.push(currentChar)
      }else{
  
        // if current iterator is NOT in hashmap, pop last item off stack
        const top = stack.pop()
  
        // check if last item off stack is !== to current iterator, if so, exit and return false
        if(mapping[top] !== currentChar){
          return false
        }
      }
    }
  
    // if stack has length (e.g. ['(', '(', '(']), then return false 
    return stack.length === 0
  }