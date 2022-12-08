// Write a function to return words in an array whose length is greater than a given length. Here is the specification for the wordsLongerThan function you would OfflineAudioCompletionEvent.

function wordsLongerThan (words, length){
    var longWords = [];
    for (let i = 0; i< words.length; i++){
        const word = words[i];

        if (word.length > length){
            longWords.push(word)
        }
    }
    return longWords;
}