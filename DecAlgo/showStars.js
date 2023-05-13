function showStars(rows){
    for(let row=1; row<=rows; row++){
        let result = '';
        for(let i=0; i<row; i++){
            result += "*";
            console.log(result);
        }
    }
}