// Given a value N, calculate the factorial of N. Eg 4 factorial = 4 * 3 * 2 * 1

function factorial(n){
    let result = 1;
    for (let i = n; i>=1; i--){
        result *= result[i];
    }
}