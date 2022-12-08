// // Implement a function thats takes a number of even length, swaps pairs of its adjacent digits and returns the swapped number. For example, 
// newSwap(number)
// newSwap(1234) to return 2143
// newSwap(432156) to return 341265

function newSwap(number){
    // first declare a variable that converts the number to a string using the .toString()
    const numStr = number.toString();
    // split the numStr thereby converting them to an arr
    const numArr = numStr.split('');
    // splitting into chunks
    const chunks = []

    for (let i=o; i < numArr.length; i++){
        // declare a variable and return the first two items of the array specifying the start and end index
        const newChunk = numArr.slice(i, i+2);
        // after looping through, input the new value of the newChunk into the chunks array by making use of the chunks.push(newChunk)
        chunks.push(newChunk);
    }
    const swappedArr = chunks.map(chunk => chunk.reverse())

    const joinedArr = swappedArr.flat();
    // joining the joinedArr and convert it a a str
    const str = joinedArr.join("");
    // convert the str to a number
    return Number(str);
}