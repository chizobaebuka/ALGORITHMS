// const arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 0, 0, 9, 1, 2, 3]


// const newSet = new Set(arr);
// console.log(newSet);

function check(str){
    const newSet = new Set(str);

    return (newSet.size === str.length) ? true : false;
}

// OR

function check(str){
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length; j++){
            if(str[i] === str[j]){
                return false;
            }
        }
    }
    return true;
}