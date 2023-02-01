/** LOOPS
 * Loops are used to (mose easily) execute repeated actions.
 * Where we want to start & stop iterating, what is being looped through, the conditions on which we want that code to continue,
 * & how we want to iterate through the data are all important factors to consider when deciding on a loop to use.
**/

// FOR 
// For - loops through a block of code a number of times. **for(let i=0; i<10; i++){} in obj)**
let arr = ['Remi', 'Sarge', 'Bodhi', 'Valor'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].toUpperCase()); // => logs REMI, SARGE, BODHI, VALOR
}

// FOR - IN Loop
// For/In - loops through the properties of an object. **for(let key in obj){}**
let obj = {
    name:'Remi', 
    color: 'Golden', 
    breed: 'Golden',
    age: 2
};
for(let key in obj) {
    console.log(key + ' : '+ obj[key]);
} //=> logs name : Remi, color : Golden, breed : Golden, age : 2

// FOR - OF Loop
// For/Of - loops through the values of an iterable object. **for (let element of iterable){}**
const iterable = [10, 20, 30];
for (let value of iterable) {
  value += 1;
  console.log(value); // => logs 11, 21, 31
}

//WHILE LOOP
// While - loops through a block of code while a specified condition is true. **while(x < 10){ x++; }**
let count = 5;
while (count >= 0) {
    console.log(count); //=> logs 543210
    count--;
}

// DO - WHILE Loop
// Do/While - loops through a block of code while a specified condition is true. **for(let key in obj){}**
let scream = '';
let i = 0;
do {
  i++;
  scream = scream + 'A';
} while (i < 5);
console.log(scream); //=> logs 'AAAAA'