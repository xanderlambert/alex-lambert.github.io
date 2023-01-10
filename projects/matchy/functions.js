/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

// ## Step 5 - Break
// **Step back and think about how far you've come!!** We are doing really hard stuff and if you've gotten here, you get it! This is awesome! It means you are well on your way to becoming a **pro web developer**. SWEET!

// # Part 3
// **Test and submit your work**

// Now you're done! Time to submit your great work to Greenlight to get that sweet, sweet green light.


// //////////////////////////////////////////////////////////////////////
// // Step 1 - Search ///////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////

function search(animalsArr, nameStr){
    for (var i = 0; i <= animalsArr.length - 1; i++){
        if (animalsArr[i].name === nameStr) {
            return animalsArr[i];
        } 
    }
    return null;
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    for (var i = 0; i <= animals.length - 1; i++){
        if (animals[i].name === name) {
            animals[i] = replacement;
        } 
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function remove(animals, name){
    for (var i = 0; i <= animals.length - 1; i++){
        if (animals[i].name === name) {
            animals.splice(i);
        } 
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, name){
    if (name.name.length > 0 && name.species.length > 0) {
        for (var i = 0; i < animals.length; i++){
            if (animals[i].name === name.name) {
                return;
            }
        }
        animals.push(name);
    }    
}
    
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}