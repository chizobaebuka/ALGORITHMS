// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))


function addBinary(a,b){
    // returning a + b and converting it to string and let the parameter in the .tostring(2) coz the number of items needs to be 0 and 1
    return (a+b).toString(2);
}