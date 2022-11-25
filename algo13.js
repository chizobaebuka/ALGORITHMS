// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
    let arr = [];
    // declare a variable "arr" for an empty array
    for(let i=0; i<=n; i++)
  // use the for loop to loop through the indexes of array and include the value of n itself and increase the value of i++
      arr[i] = 2**i;
  //   The new arr value = 2 raised to the power of the value of the index chosen
    return arr;
  //   return the array thats been declared
  }