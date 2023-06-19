// A variation of determining leap years, assuming only integers are used and years can be negative and positive.
// Write a function which will return the days in the year and the year entered in a string.

function yearDays(year) {
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
        return `${year} has 366 days`
    }else{
        return `${year} has 365 days`
    }
}