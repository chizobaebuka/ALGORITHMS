// Given a sentence, return the character that occurred the highest number of times without including the strings and considering uppercase and lowercase as same

let string = "I want to eat"
function highestCharacter(string){
    const store = {};
    for (let char of string){
        let key = char.tolowerCase().trim();
        if (key === "") continue;
        if (store[key]){
            store[key]++;
        }else{
            store[key] = 1;
        }
    }
    const values = Object.values(store);
    const highestValue = Math.max(...values)
    const keys = Object.keys(store);
    for (let key of keys){
        if (store[key] === highestValue){
            return key; 
        }
    }
}