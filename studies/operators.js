/** OPERATORS:
 * 
 0: (INTRO) Operators produce some result from manipulating a value or operand.
 Operators are used to assign & compare values, perform arithmetic, or apply logic. * */ 

//1.Assignment Operators (= += -= *= /= %= **= )
//Assignment Operators assign a value to OR update the value of a variable based on the first arithmetic symbol of the operator.
let num = 2; //assigning num to 2;
num += 3; //adds the two sides and sets num equal to result
console.log(num); //=> logs 5
num *= 10; //multiplies the two sides and sets num equal to result
console.log(num); //=> logs 50
num = 1; ////reassigning num to 1;
console.log(num); //=> logs 1

//2.Arithmetic Operators (+ * % - ** /)
//Arithmetic Operators perform arithmetic on a value.
let val = 2 + 2; //addition operator
console.log(val); //=> logs 4
let val2 = val * 10; //multiplication operator
console.log(val2); //=> logs 40
let val3 = val2 % 4; //remainder/modulo operator
console.log(val3); //=> logs 0(remainder)
let val4 = val3 - 2; //=> subtraction operator
console.log(val4); //=> logs -2
let val5 = val4 ** 4; //exponent operator
console.log(val5);//=> logs 16
let val6 = val5 / 4; //division operator
console.log(val6);//=> logs 4


//3.Comparison Operators (> < >= <= == === ! )
//Comparison Operators are used in logical statements to determine differences (or equality) between variables/values.
// Comparison operators return a boolean. 
console.log(1 > 10); //Greater than operator => logs false
console.log(1 < 10); //Less than operator => logs true
let x = 0;
if ( x >= 0) {
  console.log('this is true');
} else {
  console.log('this is false');
}//Greater than or equal to operator => logs 'this is true'
let y = 5;
if ( y <= 0) {
  console.log('this is true');
} else {
  console.log('this is false');
} //=> Less than or equal to operator => logs 'this is 'false'

// == & === compare the two values for equality. === takes datatype into consideration while == does not. 
console.log(5 == '5'); //=> logs true
console.log(5 === '5'); //=> logs false
console.log(5 === 5); //=> logs true

//!= & !== reverse the logic of the == & === operators. So !== takes datatype into consideration while != does not.
console.log(5 != '5'); //=> logs false
console.log(5 !== '5'); //=> logs true
console.log(5 !== 5); //=> logs false

//4.Logical Operators (&& || !)
//Logical Operators return a boolean dependent upon the values to each side of them.
//The && operator returns true if both sides are true; false otherwise.
//The || operator returns true if even one side is true; false otherwise.

console.log((1 > 0) && (2 > 0)); //=> logs true
console.log((1 > 0) || (2 > 0)); //=> logs true

console.log((1 < 0) && (2 > 0)); //=> logs false
console.log((1 < 0) || (2 > 0)); //=> logs true

console.log((1 < 0) && (2 < 0)); //=> logs false
console.log((1 < 0) || (2 < 0)); //=> logs false

//5. Unary Operators (!, typeOf, -)
//Unary Operators execute on only one operand.

//The bang operator ! returns the reverse of the logic follwing it.
console.log(!(1 < 10)); //=> logs false
console.log(!false); //=> logs true

//typeOf returns a string describing the datatype of the value following it. 
console.log(typeof 3); //=> logs 'number'
//typeOf does not differentiate between objects, arrays & null.
console.log(typeof []); //=> logs 'object'
console.log(typeof {}); //=> logs 'object'
console.log(typeof null); //=> logs 'object'

//-The negative operator can change a value to negative or to positive, if it was previously negative, similar to *-1 in math.
const z = -5;
console.log(-z); //=> logs 5


//6. Ternary operator (a ? b : c)
//he conditional (ternary) operator is the only JavaScript operator that takes three operands.
//a: a condition followed by a question mark (?),
//b: an expression to execute if the condition is truthy followed by a colon (:),
//c: and expression to execute if the condition is falsy. This operator is often used as an alternative to an if-else statement.

function costCalc(membership) {
  return (membership ? '$1' : '$6');
}
console.log(costCalc(true)); //=> logs '$1'
console.log(costCalc(false)); //=> logs '$6'



