/*
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.
*/

// two input arrays - names:string[], heights:number[]
// both are distinct - heights will be all unique positive integers

// names[i] && heights[i] = person and corresponding height

// return names sorted (mutate) in desc order by people's heights

var sortPeople = function (names, heights) {
  let map = new Map();

  for (let i = 0; i < names.length; i++) {
    // all heights are distinct - cannot overwrite
    map.set(heights[i], names[i]); // {180 : Mary, 165 : John, 170 : Emma}
  }

  // initialize arr to append names and return
  const result = [];

  // sort heights arr
  heights.sort((a, b) => b - a);

  // append map[height] (name) to array in desc order
  for (let height of heights) {
    result.push(map.get(height)); // get corresponding name with respective height
  }

  return result;
};

var sortPeople = function (names, heights) {
  const people = [];

  for (let i = 0; i < names.length; i++) {
    people.push({ name: names[i], height: heights[i] });
  }

  people.sort((a, b) => b.height - a.height);

  const sortedNames = people.map((person) => person.name);

  return sortedNames;
};

// names = ["Mary", "John", "Emma"], heights = [180, 165, 170] => return ["Mary", "Emma", John]
// names = ["Alice", "Bob", "Bob"], heights= [155, 185, 150] => return ["Bob", "Alice", "Bob"]

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]), ["Mary", "Emma", "John"]);
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]), ["Bob", "Alice", "Bob"]);
