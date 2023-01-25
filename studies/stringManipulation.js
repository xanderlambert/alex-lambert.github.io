/**
 * STRING MANIPULATION
 *  Strings can be manipulated with either operators and methods. 
 * This allows us to produce a wide variety of resultant strings within specific circumstances.
 */

// Using Operators
let firstName = 'Alex';
let lastName = 'Lambert';
let fullName = firstName + ' ' + lastName;
console.log(fullName); //=> logs 'Alex Lambert' 
//*Note: a space can be placed at the beginning of lastName so that the name isnt all one word. I chose to add it seperately here but there are a couple of ways to do this.
let fullerName = firstName + 'ander' + ' ' + 'David' + ' ' + 'Lambert';
console.log(fullerName); //=> logs 'Alexander David Lambert' 
//Using