'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest){
//     hasDriversLicense = true
// };
// console.log(hasDriversLicense);


// // functions, functions declaration and function expression, function declarations can be called before defining the function
// // function declaration, process called hoisting
// console.log(getAvg1([1, 2, 3]))

// function getAvg1(_list){
//     let sum = 0;
//     for (var i = 0; i < _list.length; i++){
//         sum += _list[i];
//     }
//     return sum/_list.length;
// };


// // function expressions
// const getAvg2 = function(_list){
//     let sum = 0;
//     for (var i = 0; i < _list.length; i++){
//         sum += _list[i];
//     }
//     return sum / _list.length;
// }

// console.log(getAvg2([1, 2, 3]));
// console.log(typeof getAvg1);
// console.log(typeof getAvg2);

// // arrow functions
// // only can ommit "return" if arrow function is a one-line function
// const getAvg3 = _list => {
//     let sum = 0;
//     for (var i = 0; i < _list.length; i++){
//         sum += _list[i];
//     };
//     return sum / _list.length;
// };

// const calcAge = birthyear => 2020 - birthyear;

// const yearUntilRetirement = (birthyear, currentYear) => {
//     const age = currentYear - birthyear;
//     const timeTilRetirement = 65 - age;
//     if (timeTilRetirement < 0){
//         return 0;
//     } else {
//         return timeTilRetirement
//     }
// };

// console.log(yearUntilRetirement(1993, 2020));
// console.log(yearUntilRetirement(1940, 2020));

// console.log(getAvg3([1, 2, 3]), typeof getAvg3);
// console.log(calcAge(1993))

// // Coding Challenge #1

// /*
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

// GOOD LUCK 😀
// */

const dolphins = {
    name: 'dolphins',
    score: [44, 23, 71]
};

const koalas = {
    name : 'koalas',
    score : [65, 54, 49]
};

const dolphins2 = {
    name : 'dolphines2',
    score : [85, 54, 41]
};

const koalas2 = {
    name: 'koalas2',
    score: [23, 34, 27]
}

function calcAverage(scores) {
    let sum = 0;
    for (var i = 0; i < scores.length; i++){
        sum += scores[i];
    }
    return sum / scores.length;
}

function checkWinner(team1, team2) {
    const team1Avg = calcAverage(team1.score);
    const team2Avg = calcAverage(team2.score);
    if (team1Avg >= team2Avg * 2){
        console.log(`team ${team1.name} wins, (${team1Avg} vs ${team2Avg})`);
    } else if (team2Avg >= team1Avg * 2){
        console.log(`team ${team2.name} wins, (${team2Avg} vs ${team1Avg})`);
    } else {
        console.log('no winners')
    }
}

console.log(checkWinner(dolphins, koalas));
console.log(checkWinner(dolphins2, koalas2));



