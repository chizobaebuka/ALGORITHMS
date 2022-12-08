// // Implement a method that returns the missing number in a given integer array between 1 and 9. If there is no missing number, the function should return false
// example,
// missingNumber(numArr)
// missingNumber([1,2,3,4,6,7,8,9]) to return 5
// missingNumber() to return 9
// minimumNumber([1,2,3,4,5,6,7,8,9]) to return false

function missingNumber(numArr){
    let sum = 0;
    let newSum = 0;
    let numbers = [1,2,3,4,5,6,7,8,9]
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    for (let i = 0; numArr.length; i++){
        newSum += numArr[i];
    }
    if (sum !== newSum){
        let missingNumb = sum - newSum;
        return missingNumb;
    }else{
        return false;
    }
}

// OR

function missingNumber(numArr){
    for (let i = 0; i < 9; i++){
        if (numArr[i] !== i + 1){
            return i + 1;
        }
    }
    return false;
}