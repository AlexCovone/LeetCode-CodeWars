// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
    const north = walk.filter(element => {return element === 'n'}).length;
    const south = walk.filter(element => {return element === 's'}).length;
    const east = walk.filter(element => {return element === 'e'}).length;
    const west = walk.filter(element => {return element === 'w'}).length;

    return walk.length === 10 && north === south && east === west
}

// Alternative with one loop
function isValidWalk(walk) {
  // Check if the walk will take exactly 10 minutes
  if (walk.length !== 10) {
    return false;
  }
  
  // Track the position of the walk
  let x = 0; // horizontal position
  let y = 0; // vertical position
  
  // Process each step of the walk
  for (let i = 0; i < walk.length; i++) {
    const direction = walk[i];
    
    // Update the position based on the direction
    switch (direction) {
      case 'n':
        y++;
        break;
      case 's':
        y--;
        break;
      case 'e':
        x++;
        break;
      case 'w':
        x--;
        break;
    }
  }
  
  // Check if the walk ends at the starting point
  return x === 0 && y === 0;
}