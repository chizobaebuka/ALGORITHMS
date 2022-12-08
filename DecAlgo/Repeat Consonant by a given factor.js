// Write a function that repeats every consonant in a string by a given factorial. Here is the specification for the repeatConsonants function you would OfflineAudioCompletionEvent. 

function repeatConsonants(word, multiplier){
    const knownVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    let result = '';
    for (let i = 0; i<word.length; i++){
        const letter = word[i];

        if(!knownVowels.includes(letter)){
            result += letter.repeat(multiplier)
        }else{
            result += letter;
        }
    }
    return result;
}