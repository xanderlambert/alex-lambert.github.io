// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 * ************For Testing************   npm start --prefix ./alex-lambert.github.io/projects/let-s-get-functional
 * 
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {

    let males = _.filter(array, function(customer) {
        return customer.gender === 'male';
    });

    return males.length;

};

var femaleCount = function(array) {
    let females = _.reduce(array, function(prev, current) {
            if (current.gender === 'female') {
                prev += 1;
            }
            return prev;
    }, 0);
    return females;
};

var oldestCustomer = function(array) {
    let old = _.reduce(array, function(acc, current) {
        if (acc.age < current.age) {
            acc = current;
        } 
        return acc;
    });
    return old.name;
};


//use reduce method w/no seed value. accumulate which customer is yougest oldest
var youngestCustomer = function(array) {
    let young = _.reduce(array, function(acc, current) {
        if (acc.age > current.age) {
            acc = current;
        } 
        return acc;
    });
    return young.name;
};

var averageBalance = function(array) {
    let total = _.reduce(array, function(acc, current) {
        let x = current.balance.replace(/[$,]/g,'');
        acc += Number(x);
        return acc;              
    }, 0);
    return total/array.length;
};

var firstLetterCount = function(array, char) {
    let total = _.reduce(array, function(acc, current) {
            if (current.name[0].toUpperCase() === char.toUpperCase()) {
                acc += 1;
            }
        return acc;
    }, 0);
    return total;
};

var friendFirstLetterCount = function(array, customer, char) {
    let count = 0;
    for (let i =0; i < array.length; i++) {
        if (array[i].name.toUpperCase() === customer.toUpperCase()) {
            for (let j = 0; j < array[i].friends.length; j++) {
                if (array[i].friends[j].name[0].toUpperCase() === char.toUpperCase()) {
                    count++;
                }
            }
        }

    }
    return count;
};

var friendsCount = function(array, name) {
    let newArr =[];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].friends.length; j++) {
            if (array[i].friends[j].name === name) {
                    newArr.push(array[i].name);
                }
            }
        

    }
    return newArr;
};

var topThreeTags = function(array) {
    let newArr =[];
    let newObj = {};
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].tags.length; j++) {
            newArr.push(array[i].tags[j]);
            }
    }
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] in newObj) {
            newObj[newArr[i]] += 1;
        } else {
            newObj[newArr[i]] = 1;
        }
    }
    let keysSorted = Object.keys(newObj).sort((a, b) => newObj[b] - newObj[a]);
    keysSorted.length = 3;
    return keysSorted;
};


// var genderCount= function(array) {
//     let newArr =[];
//     let newObj = {};
//     //loop through customers array for obj
//     for (let i = 0; i < array.length; i++) {
//         //for every obj, push their gender to the new array
//          newArr.push(array[i].gender);      
//     }
//   //loop through newArr, adding elements & keys to newObj ??reduce???
//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i] in newObj) {
//             newObj[newArr[i]] += 1;
//         } else {
//             newObj[newArr[i]] = 1;
//         }
        
//     }
//   return newObj;

// }

var genderCount= function(array) {
    let countObj = _.reduce(array, function(acc, current) {
        if (current.gender in acc) {
            acc[current.gender] ++;
        } else {
            acc[current.gender] = 1;
        }

        return acc;
    }, {});
    return countObj;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
