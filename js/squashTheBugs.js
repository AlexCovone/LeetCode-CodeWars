// Eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number. There will only be one 'longest' word.

function findLongest(string) {
    return  string.split(" ").reduce((longest, word) => Math.max(word.length, longest),0);
    }