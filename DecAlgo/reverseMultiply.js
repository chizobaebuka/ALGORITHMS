function reverseMultiply (arr){
    const result = [];
    const length = arr.length;

    for (i=0; i < arr.length; i++){
        result.push(arr[i].length-i)
    }
    return result
}