// An ATM only has 100, 50, 20 Naira bills (NGN) available to be dispensed. 
// Given an amount between 40 and 10000 Naira (inclusive) rounded to the nearest 10 and assuming that the ATM wants to use as few bills as possible, write a function that returns the minimal number of 100, 50, and 20 Naira bills the ATM needs to dispense (in that order) in an array. 
// For Example, 
// withdraw(amount)
// withdraw(250) to return [2,1,0]
// withdraw(370) to return [3, 1, 1]
 function withdraw(amount){
    const hundreds = Math.floor(amount/100);
    amount = amount - hundreds * 100;
    const fifties = Math.floor(amount/50);
    amount = amount - fifties * 50;
    const twenties = Math.floor(amount/20);
    amount = amount - twenties * 20;
    
    return [hundreds, fifties, twenties];
 }