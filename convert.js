// function kilometersToMile(kilo) {
//     const mile = kilo * .6023;
//     return mile;
// }

// const miles = kilometersToMile(100);
// console.log(miles)


// leap year calculation
// function isLeapYear(year) {
//     if (year % 100 !== 0 && year % 4 === 0) {
//         return true;
//     }
//     else if (year % 400 === 0){
//         return true;
//     }
//     return false;
// }

// const leap1 = isLeapYear(2024);
// const leap2 = isLeapYear(2061);
// const leap3 = isLeapYear(2800);
// const leap4 = isLeapYear(2400);

// console.log(leap1,leap2,leap3,leap4)



// Average of the sum of odd numbers

// declaring the function
function oddAvg(numbers) {
    // getting the odds in the right place
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }
// sum of the odd numbers
    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }
    // getting the counts and average ready
    console.log(sum);
    const count = odds.length;
    const avg = sum / count;
    return avg;
}


// declaring the array
const numbers = [11, 22, 3, 44, 55, 57, 66, 89, 97,105];
const avg = oddAvg(numbers);
console.log('the average is : ', avg);
