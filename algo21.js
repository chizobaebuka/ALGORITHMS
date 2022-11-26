// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    // Declare a variable for the result you want and also a variable that would convert the num to a string (num.toString())
    var result = "";
    var num = num.toString();
    // use the for loop to loop through all instances of the number and display the result for (index of the number raised to power 2 and convert the resulting answer to a string. {num[i] ** 2}.toString())
    for (i = 0; i < num.length; i++){
        result += (num[i] ** 2).toString();
    }
    // Return the result using the call back function 
    return Number(result);
}