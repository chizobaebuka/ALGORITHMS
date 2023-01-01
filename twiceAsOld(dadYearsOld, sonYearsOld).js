// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let twice = dadYearsOld - sonYearsOld * 2;
    // assigning the variable  "twice" to equate the fathers age is 2 times the sons age and then subtracying fathersAge from sons age * 2 to get the "twice"
    return twice < 0 ? twice * (-1) : twice;
    // return the value (twice) within the function, that if the value of twice is < 0 then the new value of twice = twice * (-1) thereby equating to the twice  
  }