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

//2.Arithmetic Operators (+ - * / % **)
//Arithmetic Operators perform arithmetic on a value.
let val = 2 + 2; //addition operator
console.log(val); //=> logs 4
let val2 = val * 10; //multiplication operator
console.log(val2); //=> logs 40
let val3 = val2 % 4; //remainder/modulo operator
console.log(val3); //=> logs 0(remainder)

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

// == & === compare the two values for equality. === takes datatype into consideration while == does not. != & !==
console.log(5 == '5'); //=> logs true
console.log(5 === '5'); //=> logs false
console.log(5 === 5); //=> logs true



//4.Logical Operators (&& || !)
//Logical Operators 

let num = 2; //assigning num to 2;
num += 3; //adds the two sides and sets num equal to result
console.log(num); //=> logs 5
num *= 10; //multiplies the two sides and sets num equal to result
console.log(num); //=> logs 50
num = 1; ////reassigning num to 1;
console.log(num); //=> logs 1

//The bang operator ! returns the reverse of the logic follwing it.
console.log(!(1 < 10)); //=> logs false

