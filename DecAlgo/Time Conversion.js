// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45


function timeConversion(s){
    // AM: 00:00:00AM TO 11:59:59
    // PM: 12:00:00PM TO 23:59:59

    // Use the split function on the str to convert it to and array and then use the array[2] for replacing the AM/PM
    let parts = s.split(':');
    parts[2] = parts[2].replace(/AM|PM/g, '');
    
    
    if (s.includes('PM') && Number(parts[0]) < 12){
        parts[0] = Number(parts[0]+12);
    }
    if(s.includes('AM') && Number(parts[0]) === 12){
           parts[0] = '00';
    }

    return parts.join(":");
    
}

// OR

function time(string){
    let hour = string[0] = string[1];
    let newHour = hour;

    if(string.includes('PM')){
        newHour = Number(hour) + 12;
    }


    // let newTime = string.replace (hour, newHour);



    if (newHour === 24 && string.includes()){
        newHour === '00'
    }
    return newTime.replace(/AM|PM/g, '');
}