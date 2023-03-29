// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

  function mostFrequent(arr){
    let hashmap = {} // 12 : 3 // 10 : 2 // 8 : 1 // 7 : 1 // 6 : 1 // 4 : 1 
    let maxVal = 0
    let maxKey = 0

    for(let num of arr){
        if(!hashmap.hasOwnProperty(num)){
            hashmap[num] = 1 
        }else{
            if(hashmap[num] > maxVal){ // 12 - true // 10 - false // 12 - true
                maxVal = hashmap[num] // maxVal = 1 // maxVal = 2
                maxKey = num // maxKey = 12 // maxKey = 12
            }
                hashmap[num]++ // 2 // 2 // 3
        }
    }
    return Number(maxKey) // Number(12)
}
   

// Example
// [12, 10, 8, 12, 7, 6, 4, 10, 12] 