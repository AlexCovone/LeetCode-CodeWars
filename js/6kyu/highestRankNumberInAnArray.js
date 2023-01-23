// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

function highestRank(arr){
  
    let hashmap = {}
    let maxVal = 0
    let maxKey = 0
    
    for(let num of arr){
      if(!hashmap.hasOwnProperty(num)){
        hashmap[num] = 1    
      }else{
        if(maxVal < hashmap[num]){
          maxVal = hashmap[num]
          maxKey = num
        }
        hashmap[num]++
      }
    }
   return Number(maxKey) 
  }