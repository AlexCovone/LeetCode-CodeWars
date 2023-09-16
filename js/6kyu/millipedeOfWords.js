/*
The set of words is given. Words are joined if the last letter of one word and the first letter of another word are the same. Return true if all words of the set can be combined into one word. Each word can and must be used only once. Otherwise return false.

Input
Array of 3 to 7 words of random length. No capital letters.

Example true
Set: excavate, endure, desire, screen, theater, excess, night.
Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.

Example false
Set: trade, pole, view, grave, ladder, mushroom, president.
Millipede: presidenT Trade.
*/

function canCombineWords(words) {
    // depth first search algo
    function dfs(usedWords, lastLetter) {
      if (usedWords.size === words.length) {
        // All words have been used
        return true;
      }
      
      for (let i = 0; i < words.length; i++) {
        if (!usedWords.has(i) && words[i][0] === lastLetter) {
          usedWords.add(i);
          if (dfs(usedWords, words[i].slice(-1))) {
            return true;
          }
          usedWords.delete(i);
        }
      }
      
      return false;
    }
    

    for (let i = 0; i < words.length; i++) {
      if (dfs(new Set([i]), words[i].slice(-1))) {
        return true;
      }
    }
    
    return false;
  }


  import { getImageUrl } from './utils.js';

  function Avatar({ person, size }) {
  
    let thumbnailSize = 's'
    if(size > 90){
      thumbnailSize = 'b'
    }
    
    return (
      <img
        className="avatar"
        src={getImageUrl(person, thumbnailSize)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  
  export default function Profile() {
    return (
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    );
  }
  
  



// P - array of words (str)
// R - boolean value if all words in the array can be combined into one word - last letter of one word and first letter of next must be same 
// E - [excavate, endure, desire, screen, theater, excess, night] => desirE EndurE ExcavatE ExcesS ScreeN NighT Theater = True
// P - look at each words first and last letter