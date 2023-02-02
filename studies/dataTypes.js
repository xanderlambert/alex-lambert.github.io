/**DATATYPES
 * 
 * JavaScript is known as a dynamic language with dynamic typing. 
 * Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types.
 * 
 * 
 * 
 * 
**/

/** 1. Number
 * Number values represent floating-point numbers like 27 or -11.75. 
 * A number literal like 27 in JavaScript code is technically a floating-point value, not an integer. No separate integer type exists for 'everyday' use.
 * numbers are able to be used in arithmetic operations to interact with other numbers and produce numeric results.
*/
 console.log(1 + 2); //=> logs 3
 //JS recognizes both values as numbers and adds them as expected.
 console.log('1' + '2'); //=> logs '12'
 //JS recognizes both values as strings and adds them together as if they were strings.
 console.log('1' + 2); //=> logs '12'
 //JS recognizes one or more values as strings, so it treats the + as a string concatenator and converts the number to its string-form in order to concatenate the two values.
 console.log('2' - 1); //=> logs 1
 // JS recognizes the  minus operator so it expects arithmetic. It then converts both operands to numbers in order to subtract.


/** 2. String
 * A sequence of characters that represent a text value.
 * Each element in the string occupies a position within the string. The first element is at index 0, the next at index 1, etc. 
 * The length of a string is dedermined by the number of characters or more specifically, UTF-16 code units, in it.
 */
console.log('Alex'); //=> logs 'Alex'
console.log('Alex' + 'Lambert'); //=> logs 'Alex Lambert'


//3. Boolean
// A logical datatype that can only have the values of true or false.
//Conditional statements resolve to boolean values to determine which code is executed next(control flow).
(1 > 10) ? console.log("Boolean resolved to true") : console.log("Boolean resolved to false"); //=> logs "Boolean resolved to false"
(1 > 0) ? console.log("Boolean resolved to true") : console.log("Boolean resolved to false"); //=> logs "Boolean resolved to true"


//4.Array

//5. Object
//Objects are mutable datatypes that can be seen as a collection of properties.
//Object properties are key-value pairs. Property keys are generally strings or symbols.
//Property values can be any datatype, including functions/ methods or other objects, which enables the building of complex data structures.

//6.Function
// Functions are comprised of a sequence of statements known as the function body. Values can be passed to a function as 'parameters' and most functions will return some 'value'.
// Functions are first-class objects. They can be passed to other functions, returned from functions, and assigned to variables and properties.
// Functions are distinguished from other objects due do the fact that they can be called.
// 

//7.undefined
// A top-level property whose value is not defined.

//8.null
//A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)

//9.NaN

//10. infinity & -infinity

//11.primitive(simple) vs. complex datatypes

//12.by copy vs. by reference