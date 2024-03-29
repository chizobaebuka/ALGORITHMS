// Tuesday Algorithm Task
// Given an array of 2k integers (for some integer k,
// which will be between 0 and 5 inclusive), perform the
// following operations until the array contains only one element:

// On the 1st, 3rd, 5th, etc. iterations (1-based) replace
// each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair
// of consecutive elements with their product.
// After the algorithm has finished, there will be a
// single element left in the array.Return that element.

// Specification
// packArray(arr)
// Parameters
// arr: Array<Number> - An array of integers to be packed

// Return Value
// Number - The final product

// Constraints
// arr.length == 2k

// 0 ≤ k ≤ 5

// -9 ≤ arr[i] ≤ 99

// Example
// For arr = [1, 2, 3, 4, 5, 6, 7, 8], the output should be 186.

// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15]
// -> [21, 165] -> [186], so the answer is 186.

// Here is a solution using a while loop in JavaScript:
// Here is an example of how you can use this function:

// console.log(packArray([1, 2, 3, 4, 5, 6, 7, 8])); // outputs 186

function arrayConversion(arr) {
    //coding and coding..
    let k = 0; 
    while(arr.length > 1){
      let newArr = [];
      for(let i=0; i< arr.length; i+=2){
        if(k % 2 === 0){
          newArr.push(arr[i] + arr[i + 1])
        }else{
          newArr.push(arr[i] * arr[i + 1])
        }
      }
      arr = newArr;
      k++
    }
    return arr[0];
  }