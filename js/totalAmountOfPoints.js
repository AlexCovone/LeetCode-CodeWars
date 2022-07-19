/*
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
*/

function points(games){
    let ourTeamPoints = 0

    games.map(games =>{
        if(games[0] === games[2]){
            ourTeamPoints += 1
        }else if(games[0] > games[2]){
            ourTeamPoints += 3
        }
    });
    return ourTeamPoints
}

// Alternative using reduce method
const points = games => games.reduce((acc, c) =>{
    return acc += c[0] > c[2] ? 3 : c[0] === c[2] ? 1 : 0
}, 0)

