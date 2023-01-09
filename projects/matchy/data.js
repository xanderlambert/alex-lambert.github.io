/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'Canis familiaris';
animal['name'] = 'Remi';
animal.noises = [];
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'bark bark';
noises.push('ruff');
noises.unshift('woof');
noises[noises.length] = 'AWOooooOOOooo!';
console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('Grr');
console.log(animal);




/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * dot notation, bracket notation with quotes, for in loop
 * 2. What are the different ways of accessing elements on arrays?
 * bracket notation, for loop
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

 var animals = [];
 animals.push(animal);
 console.log(animals);
 var duck = { species: 'Anas platyrhynchos', name: 'Daffy', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
 animals.push(duck);
 console.log(animals);
 var cat = { species: 'Felis catus', name: 'Bodhi', noises: ['hiss', 'purr', 'meow', 'meeeeoooowww'] };
 var rabbit = { species: 'Oryctolagus cuniculus', name: 'Cinna', noises: ['sniff', 'hop', 'crunch', 'monch'] };
 animals.push(cat);
 animals.push(rabbit);
 console.log(animals);
 console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
// 7. [ ] `console.log` `friends`.
// 8. [ ] Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
// 9. [ ] `console.log` your work.

var friends = [];
//array for easy manipulation and reordering of friends list like myspace

function getRandom(array) {
  let x = Math.random() * array.length;
  return Math.round(x);
}
friends.push(animals[getRandom(animals)].name);
console.log(friends);
animals[getRandom(animals)].friends = friends;
console.log(animals);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}