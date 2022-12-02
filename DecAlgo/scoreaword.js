let letters = "abcdefghijklmnopqrstuvwxyz"

function scoreWord(word){
    let newWord = word.tolowerCase();
    let score = 0;
    for (let i=0; i<newWord.length;i++){
        // let indexOfLetter = letters.indexOf(word[i]+1);
        score += letters.indexOf(newWord[i]) +1;
    }
    return score
}