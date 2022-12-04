// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


function sumTwoSmallestNumbers(numbers){
    // declare an array variable to sort the number and after which take the sum of the array in the first and second position of the sorted array 
    let arr = numbers.sort((a,b) => a-b);
    // After sorting the arr in ascending order using the sort(a,b) => a-b method, you then add the number in the first and second index position respectively. That is index [0] and index[1]
    return arr[0] + arr[1];
}