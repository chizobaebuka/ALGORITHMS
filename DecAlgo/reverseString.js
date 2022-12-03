// Given a string, return the reverse of the string

let str = "abcde";

function reverseString(str){
    let result = "";
    for (i = str.length-1; i>=0; i--){
        result += str[i];
    }
    return result;
}
reverseString(str);

// OR

function reverseString2(str){
    str.split("").reverse().join();
}

// OR

function reverseString3(str){
    let arr = str.split('');
    let reverseArr = arr.reverse();
    let reverseString = reverseArr.join('');
    return reverseString;
}


