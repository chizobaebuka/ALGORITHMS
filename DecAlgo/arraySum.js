// Implement a function that takes two arrays as arguments and returns an array as the sum of the values in the first two arrays with the values in the second array in repeating ondragover.apply

// for example,
// arraySum([1,2,4,5,6,2,1], [2,3,5]) to return [3,5,9,7,9,7,3]
// arraySum([10,20,30,40,50], [20,40,60]) to return [30,60,90,60,90]

function arraySum(arr1, arr2){
    let incIndex = 0;
    let newArr = [];

    for (let i=0; i<arr1.length; i++){
        let total = arr1[i] + arr2[incIndex]
        incIndex = (incIndex >= arr2.length - 1) ? 0 : incIndex + 1
        newArr.push(total);
    }
    return newArr;
}

// OR

function arraySum(arr1,arr2){
    let incIndex = 0;
    const newArr = [];
    for (let i = 0; i < arguments.length; i++){

        const total = arr1[i] + arr2[incIndex];

        incIndex = incIndex >= arr2.length - 1 ? 0 : incIndex + 1;

        newArr.push(total);
    }
}