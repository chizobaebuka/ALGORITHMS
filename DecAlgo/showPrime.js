// Prime numbers are numbers that are only divisible by 1 and itself

function showPrime(limit) {
    for(let number = 2; number<=limit; number++){
        
        let isPrime = true;
        for(let factor = 2; factor < number; factor++){
            if (number % factor === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime) console.log(number)
    }
}

// OR

function showPrime(limit) {
    for(let number = 2; number<=limit; number++){
        if(isPrime(number)) console.log(number)
    }
}
// the isPrime(number) checks if a number is a prime number or not 
// *** after getting this function, it is then called within the showPrimes function declared above

function isPrime(number){
    for(let factor = 2; factor < number; factor++){
        if (number % factor === 0){
            return false;
        }
    }
    return true;
}