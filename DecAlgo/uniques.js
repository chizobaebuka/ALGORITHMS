
// Return all the unique values in an array as another array in a sorted order. For example;
// uniques([2,4,5,4,3,2,5,6,6,7,7,9,1,2,3,5]) will return [1,2,3,4,5,6,7,9];

function uniques(arr){
    return [...new Set(arr)].sort((a,b) => a - b);
}

// OR

// function uniques(arr)[
    
// ]