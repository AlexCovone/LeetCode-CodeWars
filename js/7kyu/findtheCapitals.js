// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
	let capArr = []
    
    for(let i = 0; i < word.length; i++){
        if(word[i].toUpperCase() === word[i]){
            capArr.push(i)
        }
    }
    return capArr
};