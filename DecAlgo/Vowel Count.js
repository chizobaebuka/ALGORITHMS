// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// STRINGSFUNDAMENTALS

// To be used if the question asks it doesn't want a repetition of the vowels
// function getCount(str){
//     const vowels = 'aeiou';
//     const checked =[];
//     let count = 0;
//     for (let char of str){
//         if (vowels.includes(char) && !checked.includes(char)){
//             checked.push(char);
//             count++;
//         } 
//     }
//     return count;
// }

// getCount(str)


// OR

const vowelsCount = (string) => {
    const vowels = 'aeiou';
    const count = 0;

    for (i=0; i<string.length; i++){
        if (vowels.includes(string[i])){
            count++
        }
    }
    return count;
}

vowelsCount(string)