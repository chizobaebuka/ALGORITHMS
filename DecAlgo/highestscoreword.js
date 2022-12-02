let sentence = "I am wonderfully and fearfully made"


function scoreWord(word){
    let newWord = word.tolowerCase();
    let score = 0;
    for (let i=0; i<newWord.length;i++){
        // let indexOfLetter = letters.indexOf(word[i]+1);
        score += letters.indexOf(newWord[i]) +1;
    }
    return score
}

function highestScoringWord(sentence){
    // This returns each Word in the sentence and splits it using a space (" ")
    let eachWord = sentence.split(" ")
    let max = 0;
    let maxScore = 0;

    for (i=0; i < eachWord.length; i++){
        let scoreWord = scoreWord(eachWord[i])
        if (score > maxScore){
            maxScore = score;
            max = i
        }
    }
    return eachWord(max);
}