// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

function moveZeroes(nums){
    let zeroIndex = 0;
    let i = 0;

    while(i< nums.length){
        if(nums[i] !== 0){
            [nums[i], nums[zeroIndex]] = [nums[zeroIndex], nums[i]];
            zeroIndex++;
        }
        i++
    }
}