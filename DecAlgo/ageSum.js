// Find the sum of all the ages in an array of objects For example;
// [{name: ‘Uche Egbo’, age: 24, occupation: ‘Trader’},{name: ‘Solomon Ogbodo’, age: 30, occupation: ‘Accountant’}]
// to return 54.

function ageSum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i].age;
    };
    return sum;
}

