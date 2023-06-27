// Task
// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17".
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Documentation
// rangeCompact(nums)
// Parameters
// nums: Array<Number> - An ordered list of unique integers

// Return Value
// String - formatted string with range format

// Example:

// rangeCompact([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"

function rangeCompact(nums) {
    const result = []
    let str = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] === nums[i] + 1) {
            str.push(nums[i])
        } else {
            if (str.length < 2) {
                result.push(...str, nums[i])
            } else {
                result.push(str[0] + '-' + nums[i])
            }
            str = []
        }
    }
    return result.join()
}

// Example usage:
const nums = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
console.log(rangeCompact(nums));
