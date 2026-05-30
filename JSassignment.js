// // Problem-01 : Train TT's Fine Calculator


// function totalFine (fare){
//     const noTicket = fare + fare * 0.2 + 30;
//     return noTicket;
// }

// const fine = totalFine(200);
// console.log(fine);


// // Problem 2
// function onlyCharacter(str) {
//     if (typeof str !== "string") {
//         return "Invalid";
//     }

//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== " ") {
//             result = result + str[i];
//         }
//     }
//     return result.toUpperCase();
// }

// const final = onlyCharacter(" ha ck m e 1 @ru.c  n  ");
// console.log(final);



// // Problem-03 : FIFA Best Team Award 

// const t1 = { name: "Brazil", foul: 6, cardY: 1, cardR: 0 };
// const t2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 };


// function bestTeam(team1, team2) {
//     if (typeof team1, team2 !== 'object') {
//         return "invalid"
//     }

//     const fairPlay1 = t1.foul + t1.cardR + t1.cardY;
//     const fairPlay2 = t2.foul + t2.cardR + t2.cardY;


//     if (fairPlay1 < fairPlay2) {
//         return t1.name;
//     }
//     else if (fairPlay2 < fairPlay1) {
//         return t2.name;
//     }
//     else { return "Tie" }
// }

// const result = bestTeam(t1, t2);
// console.log('The winner of the FairPlay award is:', result);


// // Problem-04: Same Same But Different 

// function isSame(arr1, arr2) {
//     if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
//         return "invalid";
//     }

//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }
//     return true;

// }

// const result = isSame([1,2,3], [1,2,3,4]);
// console.log('The result is : ', result);


