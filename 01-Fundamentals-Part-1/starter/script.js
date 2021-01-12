// // let - creating variable in block scope
// // var - creating variable in global scope
// // const - creating a constant



// let js = "amazing";
// let input = 1 + 2 + 3 + 4;
// var message = "i am " + input + " years old";
// // if (js === "amazing") alert(message);

// var abc = 1 + 2 + 3 + 4;
// const message_la = 'debugging, abc is ${abc}'
// console.log(message);

// let firstName = "noel";
// firstName = "poo shaw kiat";
// console.log(firstName);

// // for loop in JS
// var i = 0;
// const maxLen = 10;
// for (i=0; i < maxLen; i++) {
//     let message = "loop count: " + i
//     console.log(message)
// };

// // object value
// let me = {
//     age : 10,
//     surname: "poo",
//     male : true,
//     female: false

// };
// console.log("me age: " + me.age);
// console.log("me surname: " + me.surname);
// console.log("me male: " + me.male);
// console.log(typeof me.male);


// let year;
// console.log(year);
// console.log(typeof year);
// year = 1970;
// console.log(year);
// console.log(typeof year);
// year = null;
// console.log(year);
// // typeof operatator will return "object" if item is null
// console.log(typeof year);


// let currentYear = 2020
// let inYearsTime = 20
// let yearsGoneBy = 0
// const myBirthYear = 1993

// for (i = currentYear + 1; i <= currentYear + inYearsTime; i++) {
//     let age = i - myBirthYear;

//     yearsGoneBy += 1;
//     console.log(i, age, yearsGoneBy);

//     if (age > 30 && age <= 35){
//         console.log('prime age');
//     } else if (age > 35) {
//         console.log('old age')
//     } else if (age <= 30) {
//         console.log('young age')
//     };
// };


/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// let mark = {
//     name : "mark",
//     mass : 78,
//     height : 1.69
// };
// let john = {
//     name : "john",
//     mass : 92,
//     height : 1.95
// };
// let mark2 = {
//     name : "mark2",
//     mass : 95,
//     height : 1.88
// };
// let john2 = {
//     name : "john2",
//     mass : 85,
//     height : 1.76,
// };

// function calBmi (_object) {
//     let bmi = _object.mass / (_object.height ** 2);
//     console.log(`BMI of ${_object.name}: ${bmi}`);
//     return bmi;
// };


// function compareBmi(person1, person2){
//     person1_bmi = calBmi(person1);
//     person2_bmi = calBmi(person2);
//     person1HigherBmi = person1_bmi > person2_bmi;
//     console.log(`${person1.name} has higher BMI: \n${person1HigherBmi}`);
//     return person1HigherBmi;
// }

// compareBmi(mark, john);
// compareBmi(mark2, john2);


// const age = 10;
// const drivingAge = 18;

// if (age >= drivingAge){
//     console.log('can drive');
// } else {
//     const yearsLeft = drivingAge - age;
//     console.log(`cannot drive, please wait for another ${yearsLeft} years`);
// };

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// let mark = {
//     name : "mark",
//     mass : 78,
//     height : 1.69
// };
// let john = {
//     name : "john",
//     mass : 92,
//     height : 1.95
// };
// let mark2 = {
//     name : "mark2",
//     mass : 95,
//     height : 1.88
// };
// let john2 = {
//     name : "john2",
//     mass : 85,
//     height : 1.76,
// };

// function calBmi (_object) {
//     let bmi = _object.mass / (_object.height ** 2);
//     console.log(`BMI of ${_object.name}: ${bmi}`);
//     return bmi;
// };


// function compareBmi(person1, person2){
//     person1_bmi = calBmi(person1);
//     person2_bmi = calBmi(person2);
//     person1HigherBmi = person1_bmi > person2_bmi;
    
//     if (person1_bmi > person2_bmi){
//         console.log(`${person1.name} has higher BMI than ${person2.name}`);
//     } else if (person2_bmi > person1_bmi) {
//         console.log(`${person2.name} has higher BMI than ${person1.name}`);

//     };

// }

// compareBmi(mark, john);
// compareBmi(mark2, john2);


// // type conversion - manual
// const inputYear = "2020";
// console.log(typeof Number(inputYear));

// console.log(String(23), 23);
// console.log(typeof String(23));

// // type coercion - auto on JS
// console.log("i am " + 23 + " years old");
// console.log('23' - '10' - 3); // - operator will force strings to numbers
// console.log('20'/'4');
// console.log('5' * '300');
// console.log('1' + '2' + 3); // + operators will force numbers to strings

// // falsy values
// const falsyInt = 0;
// const falsyStr = '';
// const falsyObj = {};

// if (falsyStr){
//     console.log(true);
// } else {
//     console.log(false);
// };

// if (falsyInt) {
//     console.log(true);
// } else {
//     console.log(false);
// };

// if (falsyObj) {
//     console.log(true);
// } else {
//     console.log(false);
// };


// // equality operators, == vs ===, == is a loose operator that does type coercion, === is a strict operator that does NOT do type coercion
// // always use the strict operator as default
// console.log(18 === 18);
// console.log(18 == 18);
// console.log(18 === "18");
// console.log(18 == "18");


// let inputNum = null;

// while (inputNum === null){
//     const firstNum = 10;
//     const secondNum = 10;
//     inputNum = prompt(`what is ${firstNum} + ${secondNum}?`);
//     let myFav = firstNum + secondNum;
//     if (inputNum === String(myFav)){
//         alert('correct');
//         break;
//     } else if (inputNum !== String(myFav) && inputNum !== null){
//         inputNum = null;
//         alert('wrong');
//         continue;
//     } else {
//         alert('please input answer!')
//         continue;
//     }
// };

// console.log(inputNum, typeof inputNum)


// // Coding Challenge #3

// /*
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// GOOD LUCK 😀
// */


// let dolphines = {
//     name : "dolphines",
//     score : [10, 122, 101]
// };

// let koalas = {
//     name : "koalas",
//     score : [10, 122, 101]
// };

// function getAvg(inputTeam){
//     const inputList = inputTeam.score
//     let sum = 0;
//     for (var i = 0; i < inputList.length; i++){
//         sum += inputList[i]
//     };
//     let avg = sum/inputList.length;
//     console.log(avg)
//     return avg;
// };

// function determineWinner(team1, team2){
//     const team1Avg = getAvg(team1);
//     const team2Avg = getAvg(team2);

//     const minScore = 100

//     if(team1Avg > team2Avg && team1Avg >= minScore){
//         console.log(`${team1.name} wins!`);
//     } else if (team2Avg > team1Avg && team2Avg >= minScore) {
//         console.log(`${team2.name} wins`);
//     } else if (team1Avg === team2Avg && (team1Avg >= 100 && team2Avg >= minScore)){
//         console.log('draw!');
//     } else {
//         console.log('no win!');
//     }
// };

// determineWinner(dolphines, koalas)

// const day = prompt("what day is it today");

// switch(day){
//     case 'monday':
//         console.log('monday');
//         alert("monday");
//         break;
//     case 'tuesday':
//         console.log('tuesday');
//         alert('tuesday');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('either wed or thurs');
//         alert('either wed or thurs');
//         break;
//     case "friday":
//         console.log('tgif');
//         alert('tgif');
//         break;
//     default:
//         alert('not a day');
//         console.log('not a day');
// };

// // conditional operators - a one-line if-else statement, a ternary operator
// const age = 20;

// age >= 18 ? console.log('i can drink') : console.log('i cannot drink');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);


// ////////////////////////////////////
// // Coding Challenge #4

// /*
// Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// 1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

// TEST DATA: Test for bill values 275, 40 and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// GOOD LUCK 😀
// */

// const bill = prompt('total bill?');
// var tip = bill >= 50 && bill <= 300 ? 0.15 : 0.20;
// alert(`tip percentage: ${tip}, tip amount: ${tip * bill}, total amt: ${Number(bill) + Number(tip * bill)}`)



const age = 15
var cool = age >= 18 ? true : false
console.log(cool)
