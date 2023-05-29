//Consider an array where each element in the array contains a positive integer digit. Taken as a whole, such an array represents a positive integer number. The rightmost position of the array represents the least siginificant digit of the number.
//An example digit array is [4, 2] which represents the integer 42.
//In this challenge, you will write a function to increment the number in the digit array by 1. For example, upArray([4, 2]) will return the array [4, 3].
//Here is the complete specification for upArray:
//upArray(arr)
//increases the digit array value by one
//Parameters
//arr: Array<Number> - an array of integers to be increased.
//Return Value
//Array<Number> - an xarray with the new value.
//Constraints
//Parameter array will not be empty
//Array will only contain non-negative single digit integers
//Array will not contain leading zeroes unless its length is exactly 1
//Examples
//arr           Return Value
//[5,7,4]       [5,7,5]
//[4,3,9]       [4,4,0]
//[9]           [1,0]

function upArray(arr){
    for(let i=arr.length - 1; i>=0; i--){
        // let char = arr[i]
        if(arr[i] < 9){
            arr[i]++
            return arr;
        }else{
            arr[i] = 0;
        }
    }
    arr.unshift(1)
    return arr;
}

console.log(upArray([4, 5,9]))