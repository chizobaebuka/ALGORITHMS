// You've been tasked with writing an autocorrect service for
//messages sent by your legal team.The messages which are sent
//to other lawyers need to be updated so that each message sent
//references the lawyer's client for clarity. To do this you
//need to replace all instances of "you" and its misspellings with "your client".

// Complete the function so that it takes a string and replaces
// all instances of "you", "youuu", or "u"(not case sensitive)
//with "your client"(always lower case).

// Return the resulting string.

// The Catch
// Here's the slightly tricky part: These are informal messages,
//so there are different forms of "you" and "u".

// For the purposes of this task, here's what you need to support:

// "youuuuu" with any number of "u" characters tacked onto the end
// "u" at the beginning, middle, or end of a string, but NOT part of a word
// "you" but NOT as part of another word like "young" or "Bayou"
// Specification
// autocorrect(input)
// Parameters
// input: String - the text to be autocorrected

// Return Value
// String - The autocorrected text

// Examples
// input	Return Value
// "We have sent the deliverables to you."	"We have sent the
//deliverables to your client."
// "Our team is excited to finish this with you."
//"Our team is excited to finish this with your client."

function autoCorrect(str) {

    // return str.replace(/\b(u|you)\b/ig, "your client")
    return str.replace(/\b(u|you+)\b/gi, "your client")
}
// autoCorrect()
console.log(autoCorrect("We have sent the deliverables to you."))


function correctWord(input) {
    let words = input.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.startsWith("you") && words.length > 3) {
            words[i] = "your client";
        }
        if (word === "u") {
            words[i] = "your client";
        }
    }
    return words.join(" ");
}

console.log(correctWord("we have given u the money."));

