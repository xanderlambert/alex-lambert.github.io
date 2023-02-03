/** Functions
 * 
 * A JavaScript function is a block of code designed to perform a particular task.
 * Values can be passed to a function as 'parameters'.
 * Most functions return a value.
 * Functions are first-class objects. They can be passed to other functions, returned from functions, and assigned to variables and properties.
 */


/** 1. Declaring, calling functions. Parameters vs arguments
 * 
 * Functions can be declared, then called as follows:
 */
//This function has 2 parameters, x & y.
function add(x, y){
    return x + y;
} //=> declaring the function.

add(2, 20); //=> logs 22
//calling the function. 
//2 & 20 are the arguments passed to the function.


/** 2. Assigning functions to variables, differences in function syntax
 *  Functions can be assigned to a variable & declared with the function keyword.
 *  Inputs are taken in (optionally) as parameters within the parentheses of a function.
 *  Outputs can be specified with the return keyword.
 */ 
var subtract1 = function(x, y) {
    return x - y;
} 


/** 3. Inputs & outputs
 * Functions do not necessarily need parameters(inputs), a function keyword or a return statment.
 * Arrow functions provide a more concise way of writning functions.
 * If an arrow function is simply returning a single line of code, you can omit the statement brackets and the return keyword.
 */

var randomDigit = () =>  console.log(Math.round(Math.random() * 10)); //=> logs random digit 0-10.
randomDigit(); //=> function called. Retuns random digit 0-10.


/** 4. Scope
 * Functions can see or modify variables within the global or parent scope. The inverse is not true.
 * The below example logs 20 because the function is called and does have the access needed to modify 'value'. 
 */
let value = 10;
function func(){
    value += 10;
}
func();
console.log(value); //=> logs 20
//Below is an example of function scoped variables not being accessible in the global scope.
function func2(){
    var num5 = 5; 
}
console.log(num5); //=> ERROR: num5 is not defined

 /** 5. Closure
  * A closure refers to a function with references to its surrounding state (the lexical environment). 
  * A closure gives you access to an outer function's scope from an inner function. 
  * This lexical environment consists of any local variables that were in-scope at the time the closure was created.
  * In the example below, the inner function logName is shown to have access to the 'name' variable created outside its scope.
  */
function firstFunc() { 
    const name = "Sarge"; //=> variable within scope
    function logName() { //=> closure & "local environment" created
      console.log(name); //=> reference to variable
    }
    return logName;
  }
  const newFunc = firstFunc();
  newFunc(); //=> logs 'Sarge'