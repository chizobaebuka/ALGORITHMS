// your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"

const reverseVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let strArr = str.split('');
    let arr = []

    for(let i=0; i<strArr.length; i++){
        if(vowels.includes(strArr[i])){
            arr.push(strArr[i]);
        }
    }
    arr.reverse()
    for(let i=0, j=0; i<strArr.length; i++){
        if(vowels.includes(strArr[i])){
            strArr[i] = arr[j];
            j++
        }
    }
}