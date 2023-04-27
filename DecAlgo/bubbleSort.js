// given an array of unsorted number. write bubble sort algorithm to sort the array of number in ascending order

function bubbleSort(arr){
    for (let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length -1; j++){
            if(arr[j] > arr[j+1]){
                let check = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = check
            }
        }
    }
    return arr;
}