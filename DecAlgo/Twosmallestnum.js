// Sum two smallest number

let arr2 = [5,7,8,1,3,4,9,6]

function sumTwoSmallestNum(arr2){
    // To tackle this problem you make use of sort() array and sort it in ascending order (sort(a,b)=> a - b)
    let sorted = arr.sort((a,b)=>a-b);
    // returning the 1st position [0] of the sorted array and the 2nd position[1] of the sorted array to answer effectively
    return sorted[0] + sorted[1];
}

console.log(sumTwoSmallestNum(arr2));