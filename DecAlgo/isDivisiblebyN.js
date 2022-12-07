// Write a function isDivisibleByN that extracts all the values of an array that is divisble by n and extract all the values that are divisble by n

function isDivisbleByN (arr,n){
    const isDivisible = [];

    arr.forEach(num => {
        // If the num is divisible by n without a remainder and the number does not include divisible 
        if (num % n === 0 && !isDivisible.includes(num) && num !== 0){
            isDivisible.push(num);
        }
    });

    if (isDivisible.length === 0){
        return 0;
    }

    return isDivisible;
}

// OR
// Extract all the values in an array that are divisible by n into another array and take into account there's no repetition 
function isDivisbleByN (arr,n){
    let newArr = [];

    arr.forEach(item => {
        if (item % n === 0 && !newArr.includes(item)){
            newArr.push(item);
        }
    })
    return newArr;
}