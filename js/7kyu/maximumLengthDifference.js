/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Return the maximum length difference between the two arrays.

If a1 and/or a2 are empty return -1.

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
*/

function mxdiflg(a1, a2){
    if(a1.length === 0 || a2.length === 0){return -1}

    let arr1 = a1.map(el => el.length);
    let arr2 = a2.map(el => el.length);

    return Math.max(Math.max(...arr1) - Math.min(...arr2), Math.max(...arr2) - Math.min(...arr1))
}