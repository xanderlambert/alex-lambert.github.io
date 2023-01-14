
 // VARIABLES:

//  0: (INTRO) Variables are named container for data in Javascript.
//  Variables point to specific data of any type and allow for storage and retrieval of that data within a progam. These values can be changed
//  and manipulated throughout a program and give us a name to 'tag" them to.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1. Declaration
//the creation of a variable.
var petName;

//This variable has been declared but is not yet initialized, meaning it is undefined and will appear so if logged to the console. 
console.log(petName) //=> logs undefined.
 
// Assignment/Initialization 
//pointing the variable to a specified value. This is done with the assignment operator '='.
petName = 'Remi';
console.log(petName); //=> logs 'Remi'
 
//Reassignment
//pointing a previously initialized value to a new one.
petName = 'Sarge';
console.log(petName); //=> logs 'Sarge'
//variables can be assigned any data of any data type but const cannot be reassigned.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Var, Let & Const
// These are three ways of declaring variables that exhibit different behaviors which can be used for seperate purposes.

// Const creates a constant, a variable that cannot be changed once initialized. 
const myName = 'Alex';
console.log(myName); //=> logs'Alex'
myName = 'Micheal Jordan';
console.log(myName); //=> logs TypeError: Assignment to constant variable.' This is because constants cannot be reassigned.

// Var & let can be reassigned. 
var yourName = 'Alexander';
console.log(yourName); //=> logs'Alexander'
yourName = 'Micheal Jordan';
console.log(yourName); //=> 'Micheal Jordan'

let yourName = 'AL';
console.log(yourName); //=> logs'AL'
yourName = 'MJ';
console.log(yourName); //=> 'MJ
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
//3.Hoisting
//Javascript's default behavior of moving declarations to the top of the code scop before any of the other code is executed.
//Only declarations are hoisted. 
//function declarations are hoisted first, followed by variable declarations.
console.log(x); //=> Logs an error 'ReferenceError: x is not defined'

console.log(x);
x = 5; 
var x; //=> logs simply "undefined"

x = 5; 
var x; 
console.log(x);//=> logs 5

//let & const are not hoisted, like var is. This means that they are only available inside the block where they're defined.
function hoisting(x, y) {
    if( x > y ) {
        var str = 'var inside block';
        let str2 = 'let inside block';
        const str3 = 'const inside block';
    }
    console.log(str); //=> logs 'var inside block'
    console.log(str2); //=> Logs 'ReferenceError: str2 is not defined'
    console.log(str3); //=> Logs 'ReferenceError: str3 is not defined'
} 
hoisting(2, 1)
