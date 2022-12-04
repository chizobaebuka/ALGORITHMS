function squareDigits(num){
    let string = num.toString();
    let result = 0;

    for (i = 0; i < num.length; i++){
        result[i] += string[i] ** 2;
    }
    return Number(result.join(''));
}