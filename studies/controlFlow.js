/**
 * CONTROL FLOW
 * Control flow refers to the order in which individual statements, instructions or function calls will be executed within a program.
 *
 * 1. if
 * An if statement resolves the condition following it to a boolean. Used to specify a block of JavaScript code to be executed if a condition is true.
 * */
let x = 0;
if (1 > 0){
x = 10;
}
console.log(x); //=> logs 10
if (1 < 0){
x = 100;
}
console.log(x); //=> logs 10
 
 /** 
 * 2. else if
 * An else if statement resolves the condition following it to a boolean. Used to specify a block of JavaScript code to be executed if a condition is true.
 */
 let y = 0;
 if (y > 0){
 y = 10;
 } else if (y < 11){
 y = 100;
 }
 console.log(y); //=> logs 100

 /**
 * 3. else
 * Used to specify a block of code to be executed if the condition (following the previous if statement) is false.
 */
let z = 0;
if (z > 0){
z = 10;
} else {
z = 100;
}
console.log(z); //=> logs 100

 /** 4.switch
 * Used to execute a specific code block. The switch expression is evaluated once & result compared to values of each case.
 * If a match is found, the associated block of code is executed. If no match is found, the default code block is executed.
 */
  let num = Math.round(Math.random() * 5);
  console.log(num); //=> logs a number randomly 0 - 5.
  switch(num) {
   case 0:
     console.log("number is zero");
     break;
   case 1:
     console.log("number is one");
     break;
   case 2:
     console.log("number is two");
     break;
   case 3:
     console.log("number is three");
     break;
   default:
     console.log("number is either 4 or 5");
  } //=> This statement will log a message dependent on the random number generated. 
  //If the number is not 0, 1, 2 or 3, the default statement is executed, telling us that the 'number is either 4 or 5'.