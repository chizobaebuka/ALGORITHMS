// Task
// In this challenge, you will write a function to divide an integer
//into a number of even parts, which will be returned in a result array.Summing the
//integers in this result array will produce the original number.
// For example, given number = 10 and parts = 2, splitInteger(10, 2) 
//should return an array of integers with length equal to parts: [5, 5].
// Not all numbers will offer a clean division. In this case,
//we should split the number as closely as possible to even,
//with the smaller numbers in the front of the array.For example,
// splitInteger(11, 3) → [3, 4, 4]
// There is no reason to test for edge cases; the input to your
//function will always be valid for this challenge.Please see
//the below specification for the exact constraints on the input:
// splitInteger(num, parts)
// Divides an integer into an even number of parts.
// Parameters
// num: Number - The integer number that should be split into equal parts
// parts: Number - The number of parts that the integer should be split into
// Return Value
// Array<Number> - An array of part values which sum to num.
//The parts will be ordered from smallest to largest.
// Constraints
// * 0 < num ≤ 100
// * 0 < parts ≤ num
// Examples
// 	num	parts	Return Value
// Completely even parts	10	5	[2,2,2,2,2]
// Divided as closely as possible into even parts with the
//smallest parts grouped at the front of the result	20	6[3, 3, 3, 3, 4, 4]

function splitInteger(num, parts) {
    let output = []
    let newNum = Math.floor(num / parts)
    let reminder = num%parts
    for(let i = 0; i < parts; i++){
        output.push(newNum)
    }
  if(reminder){
      for(let i =0; i <reminder; i++){
          output[i]++;
      }
  }
    return output
}
// console.log(splitInteger(11,3))

// OR

function splitInteger(num, parts){
    let output = [];
    let newNum = Math.floor(num / parts);
    let remain = num % parts;

    for(let i=0; i< parts - remain; i++){
        output.push(newNum)
    }
    for(let j=0; j<remain; j++){
        output.push(newNum + 1)
    }
    return output;
}

// console.log(splitInteger(11, 3))