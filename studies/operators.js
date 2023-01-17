// OPERATORS:

_.identity = function(value) {
    return value;
}

_.each = function(collection, func) {
     if(Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
     } else {
        for (let key in collection) {
            func(collection[key], key, collection);
        }
     }
}

//  0: (INTRO) Variables are named container for data in Javascript.
//  Variables point to specific data of any type and allow for storage and retrieval of that data within a progam. These values can be changed
//  and manipulated throughout a program and give us a name to 'tag" them to.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1.Assignment Operators (= += -= *= /= %= **= )
//The Assignment Operators assign a value to OR update the value of a variable.
var petNum = 2;
petNum = 3;
console.log(petNum); //=>

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

// 2.Arithmetic Operators
// Arithmetic Operators are used to perform math.

// 3.Comparison Operators
// 4.Logical Operators
// 5.Unary Operators
// 6.Ternary Operators

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