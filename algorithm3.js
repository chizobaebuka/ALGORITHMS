// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    //   declare a variable for positive number and equating it to 0 initially 
   let pos_Num = 0; 
   // declare a variable for negative number and equating it to 0 initially
   let neg_Num = 0;
   // making use of the if statement to check if the input is empty or less than one, if yes return an empty array.
     if(input === null || input.length < 1){
         return [];
   // using the else statement to confirm if the num is a positive number, if yes increase the count else the number is a negative number, take the sum of numbers   
     }else{
         input.forEach((num) => num > 0 ? pos_Num++ : neg_Num += num);
     }
     return [pos_Num , neg_Num]
 }