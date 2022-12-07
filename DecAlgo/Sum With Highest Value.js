// Given two arrays, retrun the sum of the array with the highest value when its elements are summed respectively.
// for example
// highestSum(X, Y)
// highestSum([2,5,1,0,5,7], [2,3,5,6,2,1]) => 20
// highestSum([15, 7], [12, 17]) => 29
// highestSum([30], [3,6,2,1]) => 30

function highestSum(X,Y){
    let result1 = X.reduce((a,b) => a+b);
    let result2 = Y.reduce((a,b) => a+b);
    let finalResult = Math.max(result1,result2);

    return finalResult;
}

// OR 
function highestSum(X, Y){
    let sum1 = 0;
    let sum2 = 0;

    for(let val of X){
        sum1 += val
    }
    for (let item of Y){
        sum2 += val
    }

    let finalResult = Math.max(sum1, sum2);

    return finalResult;
}