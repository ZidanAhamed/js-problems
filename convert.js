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



// // Average of the sum of odd numbers

// // declaring the function
// function oddAvg(numbers) {
//     // getting the odds in the right place
//     const odds = [];
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             odds.push(number);   
//         }
//     }
// // sum of the odd numbers
//     let sum = 0;
//     for (const number of odds) {
//         sum = sum + number;
//     }
//     // getting the counts and average ready
//     console.log(sum);
//     const count = odds.length;
//     const avg = sum / count;
//     return avg;
// }


// // declaring the array
// const numbers = [11, 22, 3, 44, 55, 57, 66, 89, 97,105];
// const avg = oddAvg(numbers);
// console.log('the average is : ', avg);


// // removing the duplicates

// const biryanikhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'cabul', 'dabul']
// const numbers = [1, 5, 6, 5, 6, 5, 7, 8]

// function noDuplicate(array) {
//     const unique = [];
//     for (const item of array) {
//         if (unique.includes(item) === false) {
//             unique.push(item);
//         }


//     }
//     return unique;
// }

// const uniquearray = noDuplicate(numbers);
// console.log(uniquearray)


// // Math min & max
// const min = Math.min(334,4,5,5,7,765)
// console.log(min)

// // console.log(Math.round(2.3434))
// // console.log(Math.floor(2.3434))
// // console.log(Math.ceil(2.3434))

// console.log(Math.random()*10);
// const rand = Math.round(Math.random()*10)
// console.log(rand);

// // JS Date and time
// const specificDate = new Date('2072-12-23');
// console.log(specificDate)
// console.log(specificDate.toLocaleString('en-GB'))


// // Temp - swap

// let a = 10;
// let b = 103;
// let c = 234;
// let d = 446;
// console.log(a, b);

// const temp = a;
// a = b;
// b = temp;
// console.log(a, b);
// console.log(c, d);


// const temp2 = d;
// d = c;
// c = temp2;
// console.log(c, d);



// // Part 1 - practice tasks
// 
// task 1

// function celsiusToFarenheit(celsius){
//     const farenheit = (celsius * 1.8) + 32;
//     return farenheit;
// }

// const farenheits = celsiusToFarenheit(100);
// console.log(farenheits);


// Task 2 
// 



// // Math.max 

// const max = Math.max(10,123,34,2,455,6456,77,5,4,423)

// console.log('The biggest number is:', max);
// function getMaxThree(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return "Num1 is the boss";
//     }
//     else {
//         if (num2 > num1 && num2 > num3) {
//             return "Num2 is the boss"
//         }
//         else {
//             return "Num3 is the boss"
//         }
//     }
// }

// const boss = getMaxThree(217, 129, 32);
// console.log('so the conclusion is :', boss);


// // Height calculator (Max height)

// const heights = [12, 30, 56, 77, 88, 34, 55]

// function getMin (numbers){
//     let min = numbers[0];
// for(const num of numbers){
//     if(num < min){
//         min = num;
//     }
// }
// return min;
// }

// const min = getMin(heights);
// console.log('Smallest number is', min);

// // shopping list calculator (Add and multiplication)
// function  shoppingList (shirtQ,pantQ,shoesQ){
// const shirtP = 500;
// const pantP = 700;
// const shoesP = 1000;

// const totalShirtPrice = shirtQ * shirtP;
// const totalPantPrice = pantQ * pantP;
// const totalShoesPrice = shoesQ * shoesP;

// const totalShoppingPrice = totalPantPrice + totalShirtPrice + totalShoesPrice;

// return totalShoppingPrice;

// }

// const spent = shoppingList(4,2,2);
// console.log('Total spent this Eid on shopping is' , spent);



// // Shopping cart price calculator
// const products = [
//     { name: 'Sunglass', price: 1200, quantity: 2 },
//     { name: 'Watch', price: 1500, quantity: 1 },
//     { name: 'Facewash', price: 800, quantity: 1 },
//     { name: 'Underwear', price: 400, quantity: 5 },
// ]

// function cartTotal(products) {
//     let total = 0;
//     for (const product of products) {
//         total = total + product.price * product.quantity;
//     }
//     return total;
// }

// const shoppingCost = cartTotal(products);
// console.log(shoppingCost);


// // Layered discount 
// function layeredDiscountTotal(quantity) {
//     const first100Price = 90;
//     const second100Price = 60;
//     const above200Price = 40;

//     if (quantity <= 100) {
//         const total = quantity * first100Price;
//         return total;
//     }

//     else if (quantity <= 200) {
//         const first100Total = 100 * first100Price;
//         const remainingQuantity = quantity - 100;
//         const remainingTotal = remainingQuantity * second100Price;
//         const total = first100Total + remainingTotal;
//         return total;
//     }
//     else{
//         const first100Total = 100 * first100Price;
//         const second100Total = 100 * second100Price;
//         const remainingQuantity = quantity - 200;
//         const remainingTotal = remainingQuantity * above200Price;
//         const total = first100Total + second100Total + remainingTotal;
//         return total;
//     }

// }
// const TotalDiscountedPrice = layeredDiscountTotal(1000);
// console.log(TotalDiscountedPrice);


// // simple calculator, function inside of a function

// function add(num1, num2) {
//     return num1 + num2;
// }
// function subtract(num1, num2) {
//     return num1 - num2;
// }
// function multiply(num1, num2) {
//     return num1 * num2;
// }
// function divide(num1, num2) {
//     return num1 / num2;
// }


// function calculator(a, b, operation) {
//     if (operation === 'add') {
//         const result = add(a, b);
//         return result;
//     }
//     else if (operation === 'subtract') {
//         const result = subtract(a, b);
//         return result;
//     }
//     else if (operation === 'multiply') {
//         const result = multiply(a, b);
//         return result;
//     }
//     else if (operation === 'divide') {
//         const result = divide(a, b);
//         return result;
//     }
// }

// const result = calculator(10, 12, 'divide');
// console.log(result);
