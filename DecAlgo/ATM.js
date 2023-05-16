// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

// Good Luck!!!

function solve(n){
    let counter = 0;
    let arr = [500, 200, 100, 50, 20, 10];
    arr.forEach(item => {
      counter += Math.floor(n / item)
      n = n % item
    })
    return n ? -1 : counter
}

// OR

function ATMWithdrawal(n) {
    if (n < 10 || n > 1500) {
      return -1; // Invalid withdrawal amount
    }
  
    const banknotes = [10, 20, 50, 100, 200, 500];
    let count = 0;
  
    for (let i = banknotes.length - 1; i >= 0; i--) {
      while (n >= banknotes[i]) {
        n -= banknotes[i];
        count++;
      }
    }
  
    return n === 0 ? count : -1;
  }