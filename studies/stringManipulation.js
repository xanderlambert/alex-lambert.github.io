/**
 * STRING MANIPULATION
 * Strings can be manipulated with either operators and methods. 
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

//Using template strings
console.log(`Hi, I'm ${firstName}ander David ${lastName}`); //=> logs 'Hi, I'm Alexander David Lambert'.

//Using String Methods
console.log('String'.slice(1)); //=> logs 'tring';
console.log('String'.slice(1)); //=> logs 'tring'; String substring()
console.log('String'.slice(1)); //=> logs 'tring'; String substr()
console.log('String'.slice(1)); //=> logs 'tring'; String replace()
console.log('String'.slice(1)); //=> logs 'tring'; String replaceAll()
console.log('String'.slice(1)); //=> logs 'tring'; String toUpperCase()
console.log('String'.slice(1)); //=> logs 'tring'; String charAt()
console.log('String'.slice(1)); //=> logs 'tring'; String charCodeAt()
console.log('String'.slice(1)); //=> logs 'tring'; String split()