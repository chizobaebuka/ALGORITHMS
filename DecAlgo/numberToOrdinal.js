//Tuesday NodeJS Tuesday Assessment 6 dec 2022
//Task
//Finish the function numberToOrdinal, which should take a number and
//return it as a string with the correct ordinal indicator suffix(in English).
//For example, 1 turns into "1st".
//For the purposes of this challenge, you may assume that the
//function will always be passed a non - negative integer.
//If the function is given 0 as an argument, it should return
//the string "0" without a suffix.
//To help you get started, here is an excerpt
//from Wikipedia's page on Ordinal Indicators:
//* st is used with numbers ending in 1 (e.g. 1st, pronounced first)
//* nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
//* rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
//* As an exception to the above rules, all the "teen"
//numbers ending with 11, 12 or 13 use - th(e.g. 11th,
//pronounced eleventh, 112th, pronounced one hundred[and] twelfth)
//* th is used for all other numbers (e.g. 9th, pronounced ninth).
//Specification
//numberToOrdinal(number)
//take a number and return it as a string with the correct English ordinal indicator suffix
//Parameters
//number: Number - The number to be converted to a string ordinal
//Return Value
//String - Returns a string ordinal based on the number.
//Constraints
//0 ≤ number ≤ 10000
//Examples
//number	Return Value
//1	            "1st"
//2	            "2nd"
//3	            "3rd"
//4	            "4th"
//21	        "21st"

//Solution;
/**
 * Converts a number to a string with the correct ordinal indicator suffix.
 * For example, 1 turns into "1st".
 */

function numberToOrdinal(num){
    // let number = number.toString().split("");
    if(num === 0){
        return "0";
    } 

    if(num % 100 === 11 || num % 100 === 12 || num % 100 === 13){
        return `${num}th`
    } else if (num % 10 === 1) {
        return `${num}st`;
    } else if (num % 10 === 2) {
        return `${num}nd`;
    } else if (num % 10 === 3) {
        return `${num}rd`;
    } else {
        return `${num}th`;
    }
    // f÷or(let i=0; )
}
console.log(numberToOrdinal())