/**DATATYPES
 * 
 * JavaScript is known as a dynamic language with dynamic typing. 
 * Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types.
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

/** 3. Boolean
 * A logical datatype that can only have the values of true or false.
 * Conditional statements resolve to boolean values to determine which code is executed next(control flow).
 */
(1 > 10) ? console.log("Boolean resolved to true") : console.log("Boolean resolved to false"); //=> logs "Boolean resolved to false"
(1 > 0) ? console.log("Boolean resolved to true") : console.log("Boolean resolved to false"); //=> logs "Boolean resolved to true"

/** 4.Array
 * Arrays are pieces of complex data capable of storing more than one value.
 * Arrays can contain a mix of different data types and are resizaeble.
 * Arrays are zero indexed, meaning the first element sits at index 0, the second at 1 and so on.
*/
const cars = ["GMC", "FORD", "SUBARU"];
console.log(cars[1]); //=> logs 'FORD'
cars.push('CHEVY');
console.log(cars); //=> logs [ 'GMC', 'FORD', 'SUBARU', 'CHEVY' ]

/**5. Object
 * Objects are mutable datatypes that can be seen as a collection of properties.
 * Object properties are key-value pairs.
 * Property keys are usually strings while values can be any datatype, including functions/ methods or other objects, which enables the building of complex data structures.
*/
let remi = {
    "name": "Remington",
    "species": "dog",
    "weight": 85,
}
remi.breed = 'golden';
remi['age'] = 2;
console.log(remi); //=> logs let remi = {
//     name: 'Remington',
//     species: 'dog',
//     weight: 85,
//     breed: 'golden',
//     age: 2
// }

//6.Function
// Functions are comprised of a sequence of statements known as the function body. Values can be passed to a function as 'parameters' and most functions will return some value.
// Functions are first-class objects. They can be passed to other functions, returned from functions, and assigned to variables and properties.
// Functions are distinguished from other objects due do the fact that they can be called.
function printCopies(str, n){
    while (n > 0) {
        console.log(str);
        n--;
    }
}
printCopies('aH', 3); //=> logs 'aH, aH, aH'
//The above function logs str to the console n number of times, one on each line.

//7.undefined
// Undefined is a property of the global object. A global scope variable whose value is not defined.
let x;
console.log(x); //=> logs undefined

//8.null
// A special keyword denoting a n intentionally empty value.
// null is not an identifier for a property of the global object, like undefined can be.
// Instead, null expresses a lack of identification, indicating that a variable points to no object.
const num = null;
if (num) {
    console.log('num is not null');
} else {
    console.log('num is null');
}
// => logs 'num is null'

//9.NaN
// A global property representing 'not a number'.
function numberOr(x) {
    if (isNaN(x)) {
      return NaN;
    }
    return 'number';
  }
  console.log(numberOr(1)); //logs 'number'
  console.log(numberOr('1')); //=> logs 'number'
  console.log(numberOr('word')); //=> logs NaN
  
//10. infinity & -infinity
// Infinity is a property of the global object, a variable in global scope.
// The value +Infinity is greater than any other number & -Infinity smaller.
let lgNumber = Number.MAX_VALUE * 2;
console.log(lgNumber); //=> logs Infinity
let smallNumber = -Number.MAX_VALUE * 2;
console.log(smallNumber); //=> logs -Infinity

//11 - 12.primitive(simple)(by copy) vs. complex datatypes(by reference)
// Primitive values are atomic(smallest individual) pieces of data while complex datatypes are objects that might consist of multiple values.
// Copying a primitive value from one variable to another creates a separate value copy. Changing the value in one variable does not affect the other.
// Copying a complex(reference) datatype from one variable to another creates a reference so that two variables refer to the same object.
// Changing the object via one variable reflects in another.
let dog = {
    name: 'Remi',
    age: 2,
  };
let canine = dog;
canine.age = 3;
console.log(dog); //=> logs { name: 'Remi', age: 3 }
console.log(canine); //=> logs { name: 'Remi', age: 3 }
//The above example is passed BY REFERENCE so both variables are affected by setting age to 3.

let age = 29;
let newAge = age;
newAge = newAge + 1;
console.log(age, newAge); //=> logs 29, 30
//The above example is passed BY COPY so only the modified variable is affected.