// Implement a function sumMix(arr) that given an array of integers as strings and numbers, returns the sum of the array values as if all were numbers.

let arr = [9, 3, '7', '3'];

function sumMixArray(arr){
    return arr.reduce((a,b)=> Number(a) + Number(b));
}