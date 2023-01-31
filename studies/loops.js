/** LOOPS
 * Loops are used to (mose easily) execute repeated actions.
 * 
 * For - loops through a block of code a number of times. **for(let i=0; i<10; i++){} in obj)**
 * For/In - loops through the properties of an object. **for(let key in obj){}**
 * For/Of - loops through the values of an iterable object. **for (let element of iterable){}**
 * While - loops through a block of code while a specified condition is true. **while(x < 10){ x++; }**
 * Do/While - loops through a block of code while a specified condition is true. **for(let key in obj){}**
**/

// FOR Loop
let arr = ['Remi', 'Sarge', 'Bodhi', 'Valor'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].toUpperCase()); // => logs REMI, SARGE, BODHI, VALOR
}

// FOR - IN Loop
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
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value); // => logs 11, 21, 31
}

//WHILE LOOP
let count = 5;
while (count > 0) {
    console.log(count); //=> logs 5, 4, 3, 2, 1
    count--;
}

// DO - WHILE Loop
let scream = '';
let i = 0;
do {
  i++;
  scream = scream + 'A';
} while (i < 5);
console.log(scream); //=> logs 'AAAAA'