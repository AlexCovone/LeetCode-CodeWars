/* The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in. */

function whatCenturyIsIt(year){
    let century = 0;

    for(let i = 0; i < year; i++){
        if(i % 100 === 0){
            century++
        }
    }
    return century
}

// Alternative
const century = year => Math.ceil(year/100)