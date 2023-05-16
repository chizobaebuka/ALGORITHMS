
// We have a string of brackets, and we would like to make sure each bracket is properly opened and closed. The string has any number of (, ), [, ], {, and }. A valid string follows the common-sense rules of opening and closing brackets, so in other words, the formal rules are:

// There are an equal number of opening and closing brackets of each type. Each bracket is opened first, and later closed using the same type of bracket.

// While a specific bracket is open, every other enclosed pair of brackets that is opened should be closed before the encompassing bracket closes.

// For example, {[()[]]()}() is valid, but [(]) is not. Given a string, your function should determine if it is valid or not.

// Your function should output valid, or invalid depending on the given string.

function isValid(str){
    let res = [];
    for(char of str){
        if(char === "{" || char === "[" || char === "("){
            res.push(char)
        }else if (char === "}" && res.pop() !== "{"){
            return "inValid";
        }else if (char === ")" && res.pop() !== "("){
            return "inValid";
        }else if (char === "]" && res.pop() !== "["){
            return "inValid";
        }
    }
    if(str.length === 0){
        return "inValid"
    }else{
        return "Valid"
    }
}