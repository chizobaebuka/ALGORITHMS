// Task
// You are given an array of up to four non-negative integers,
// each less than 256.

// Your task is to pack these integers into one number M so that
// the first element of the array occupies the first(or least
// significant) 8 bits of M; the second element occupies next
// 8 bits, and so on.

// Return the obtained integer M as unsigned integer.

// Note
// As indicated the first 8 bits are the least significant
// bits of M, meaning the right - most bits of the integer.
// For further clarification see the following example.

// Specification
// arrayPacking(array)
// Parameters

// array: Array<Number> - up to four unsigned integers

// Return Value

// Number - an unsigned integer

// Constraints

// array.length == 3

// 0 ≤ array[i] < 256

// Example
// For [24, 85, 0] the output should be 21784

// [24,       85,       0       ] - The initial array
// [00011000, 01010101, 00000000] - Translate each number to Binary
//    000000000101010100011000    - Compact to a single number
//             21784              - Translate to Decimal

function arrayPacking(a){
    return a.reduceRight((a,b) => a*256 + b)
}

// OR

function arrayPacking(a){
    let arr = a.reverse();

    let binaryArr = arr.map(num => num.toString(2).padStart(8, '0'));
    let binaryString = binaryArr.join('');

    let result = parseInt(binaryString, 2);

    return result;
}
