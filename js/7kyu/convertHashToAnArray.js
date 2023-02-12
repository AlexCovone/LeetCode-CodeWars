/*
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically by key name.
*/

function convertHashToArray(hash){
    let result = []

    for(let i in hash){
        result.push([i, hash[i]])
    }

    // Loop through newly created arr
    for(let i = 0; i < result.length; i++){
        for(let j = i + 1; j < result.length; j++){
            if(result[i] > result[j]){
                [result[i], result[j]] = [result[j], result[i]]
            }
        }
    }

    return result
  }


// Alternative

function convertHashToArray(hash){
    return Object.entries(hash).sort()
}