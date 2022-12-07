// Replace all numbers in an array, X divisble by an integer, Y with a string "isDivisible".
// For Example, 
// replaceDivisible(X,Y)
// replaceDivisible([2,4,3,6,5], 3) => [2,4, 'isDivisible', 'isDivisible', 5]
// replaceDivisible([12,4,4,6,5], 2) => ['isDivisible', 'isDivisible', 3, 'isDivisible', 5]

function replaceDivisible(X,Y){
    // Declare a variable for an empty array
    let output = [];
    // using for loop to check if the X[i] is included in the output array that's been declared (checking for duplicates in the array)
    for (i=0;i<X.length;i++){
        if (output.includes(X[i])){
            output.push(X[i]);
        }
    }

    // declare a new variable to check if the items in the output array above % Y with no remainder, if yes return "isDivisible" else return the item value
    let newArr = output.map(item => {
        if(item % Y === 0){
            return 'isDivisible'
        }else{
            return item
        }
    });

    return newArr;
}

// OR

function replaceDivisible(X,Y){
    let newArr = X.map(item => {
        if(item % Y === 0){
            return 'isDivisible'
        }else{
            return item
        }
    });

    return newArr;
}

// OR
function replaceDivisible(X, Y){
    return X.map(e => e % Y === 0 ? 'isDivisible' : e)
}