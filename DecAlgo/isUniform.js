// write a function isUniform which takes an array as an argument and returns true if all elements in the array are identical

// examples
// arr1 = [1, 1, 1,]
// arr2 = [2, 1, 1, 1]
// arr3 = ["a", "b", "p"]
// arr4 = ["b", "b", "b"]

function isUniform(arr){
    const equates = arr.every((item) => {
        return item === arr[0]
    });

    return equates
};

// OR

function isuniform(arr){
    let initialItem = arr[0];

    for (let i = 0; i<arr.length; i++){
        if(initialItem !== arr[i]){
            return false;
        }
    }
    return true;
}