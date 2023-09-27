// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// -----------------------------------------------------

// input two params : both type:number
// return type:number 

// arguments will always be real numbers ints

function combat(health, damage) {
  const remainingHealth = health - damage;

  return Math.max(0, remainingHealth);
}

// 100, 5 => 95
// 92, 8 => 84
// 20, 30 => 0

console.log(combat(100, 5), 95)
console.log(combat(92, 8), 84)
console.log(combat(20, 30), 0)