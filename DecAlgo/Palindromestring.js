function isPalindrome(str){
    let arr = str.split("")
    let reverseArr = arr.reverse();
    let reverseString = reverseArr.join("");
    
    if (str === reverseString){
        return true;
    }else{
        return false;
    }
}