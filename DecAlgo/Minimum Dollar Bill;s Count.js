// DESCRIPTION:
// Find the minimum dollar bill's count to represent some value based on the availables bills.

// You will receive the value and an array as input (the array contains the available bills).

// For instance:

// minimumBillCount(100, [10, 50, 20]) should return 2; (2x$50)

// minimumBillCount(500, [100, 50, 20]) should return 5; (5x$100)

// minimumBillCount(40, [1, 10, 20]) should return 2; (2x$20)

// minimumBillCount(5, [1, 10, 20]) should return 5; (5x$1)

// It is guaranteed that the value can always be divided into given bills, and there are no "tricky" edge cases.

function minimumBill(value, numArr){
    let bill = 0;
    numArr.sort((a,b) => b-a).forEach((bill) => {
        bill += parseInt(value / bill);
        value %= bill;
    })
    return bill;
}

// OR


function withdraw(amount){
    // use the math.floor to round the number to the closest 
    const hundreds = Math.floor(amount/100);
    // 
    amount = amount - hundreds * 100;
    const fifties = Math.floor(amount/50);
    amount = amount - fifties * 50;
    const twenties = Math.floor(amount/20);
    amount = amount - twenties * 20;
    return [hundreds, fifties, twenties];
}