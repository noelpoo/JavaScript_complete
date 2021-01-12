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
//     return 65 - age;
// };

// console.log(yearUntilRetirement(1993, 2020));

// console.log(getAvg3([1, 2, 3]), typeof getAvg3);
// console.log(calcAge(1993))





