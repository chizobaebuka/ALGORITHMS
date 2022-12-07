// FInd the number of elemnets in an array that are divisble by 2 and greater than 15
// For example////
// divisible (A)
// divisible ([2,3,12,18,42,24]) to return 3
// divisible ([100, 84, 37]) to return 2
// divisible ([5, 8, 6, 12]) to return 0


function divisble(A){
    let count = 0;

    for (let i=0; i<A.length; i++){
        if (A[i] % 2 === 0 && A[i] > 15){
            count++
        }
    }
    return count;
}

// STEPS TAKEN TO ANSWER THE QUESTION 
// 1. Loop through the array
// 2. How many elements is in the array