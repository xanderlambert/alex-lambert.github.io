/**
 * STRING MANIPULATION
 * Strings can be manipulated with either operators or methods. 
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

/**Using String Methods
 * Below are several simple examples of string manipulation via string methods.
 * .Slice() extracts parts of a string and returns the extracted parts in a new string.
 * .substring() extracts parts of a string and returns the extracted parts in a new string.
 * .replace() Replaces text in a string, using a regular expression or search string.
 * .toUpperCase() Converts all the alphabetic characters in a string to uppercase.
 * .charAt() Returns the character at the specified index.
 * .charCodeAt() Returns the Unicode value of the character at the specified location.
 * .split() Splits a string into substrings using the specified separator and return them as an array
*/
console.log('String'.slice(1)); //=> logs 'tring'
console.log('String'.substring(1)); //=> logs 'tring'
console.log('String'.replace('i', 'o')); //=> logs 'Strong'
console.log('String'.toUpperCase()); //=> logs 'STRING'
console.log('String'.charAt(0)); //=> logs 'S'
console.log('String'.charCodeAt(0)); //=> logs '83'
console.log('String'.split('')); //=> logs [ 'S', 't', 'r', 'i', 'n', 'g' ]