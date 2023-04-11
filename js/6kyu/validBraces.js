/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.
*/

function validBraces(str){
    // create stack to keep track of opening braces
    const stack = []

    // hashmap of opening braces and corresponding closing braces
    const braces = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    // Loop through str.length
    for(let i = 0; i < str.length; i++){
        const char = str[i]

        // if char exist in hashmap (is opening brace), push onto stack
        if(braces[char]){
            stack.push(char)
        }else{
            // if char does not exist in hashmap (is closing brace), pop most recent opening brace off stack and store in 'last'
            const last = stack.pop()

            // check if last (closing brace) matches the opening brace from hashmap
            if(char !== braces[last]){
                return false
            }
        }
    }
    return stack.length === 0
}

// P - string of braces (e.g. [], (), {})
// R - boolean value based on whether each brace has a respective opening and closing brace
// E - '([{}])' => True, ')(}{][' => False
// P - for each opening / closing brace, there should be 1 counterpart. Hashmap to store opening and closing brace, compare quantity.