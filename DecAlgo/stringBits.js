// write a function that takes a string and a number n and returns an array of the string broken into bits of length n.

// Example:

// stringBits(“wereweesf”, 2) => [‘we’, ‘re’, ‘we’, ‘es’, ‘f’]

// stringBits(“123456789033”, 3) => [‘123’, ‘456’, ‘789’, ‘033’]

function stringBits(str, n){
    let res = [];
    for (let i=0; i<str.length; i += n){
        res.push(str.slice(i, i+n));
    }
    return res;
}