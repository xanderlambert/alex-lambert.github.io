/** LOOPS
 * Loops are used to (mose easily) execute repeated actions.
 * Where we want to start & stop iterating, what is being looped through, the conditions on which we want that code to continue,
 * & how we want to iterate through the data are all important factors to consider when deciding on a loop to use.
**/

//FOR 
// For - loops through a block of code a number of times. **for(let i=0; i<10; i++){})**
// For Loops are comprised of 3 statements.
// Start statement - executed once before the code block. For example, setting a variable before the loop starts. 
// Stop statement - defines the condition for executing the code block. (Code block continues to execute while true, false will end the loop.)
// Update Statement - executed after the code block everytime. This is often used to increment a variable. (i++) 

let arr = ['Remi', 'Sarge', 'Bodhi', 'Valor'];

//iterating forwards from  the beginning(index 0)
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].toUpperCase()); // => logs REMI, SARGE, BODHI, VALOR
}

//iterating backwards from  the end(final index)
arr2 = [0, 1, 2, 3, 4];
for (let i = arr2.length - 1; i >= 0; i--) {
  console.log(arr2[i]); // => logs 4, 3, 2, 1, 0
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