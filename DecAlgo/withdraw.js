// An ATM only has 100, 50, 20 Naira bills (NGN) available to be dispensed. 
// Given an amount between 40 and 10000 Naira (inclusive) rounded to the nearest 10 and assuming that the ATM wants to use as few bills as possible, write a function that returns the minimal number of 100, 50, and 20 Naira bills the ATM needs to dispense (in that order) in an array. 
// For Example, 
// withdraw(amount)
// withdraw(250) to return [2,1,0]
// withdraw(370) to return [3, 1, 1]

const withdraw = (amount) => {
   let hundreds = 0;
   let fifties = 0;
   let twenties = 0;

   while (amount > 0){
      if(amount % 100 === 0){
         hundreds++;
         amount -= 100;
      } else if (amount % 50 === 0){
         fifties++;
         amount -= 50;
      } else {
         twenties++;
         amount -= 20;
      }
   }

   return [hundreds, fifties, twenties]
}

console.log(withdraw(300))