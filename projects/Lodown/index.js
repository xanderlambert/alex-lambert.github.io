
/*** function declarations, return value**
* identity: takes an input value and returns it, unchanged.

* @param {Any} value: The input value that will be returned as is.
* @returns {Any} value: The input value, unchanged.
*/ 
function identity(value) {
    return value;
}
module.exports.identity = identity;


/***
* typeOf: Returns the data type of the input <value> as a string

* @param {Any} value: The value for which type is to be determined.
* @returns {String}: The data type of the input <value> as a string.
*/ 
function typeOf(value) {
    if(Array.isArray(value)) {
        return 'array';
    } else if(value === null){
        return 'null';
    } else {
        return typeof value;
    }  
}
module.exports.typeOf = typeOf;


/***
* first: Designed to loop over an array and return the first <number> items of <array>.
* If <number> is not given or not a number, returns just the first element in <array>.
* If <array> is not an array, returns [].
* 
* @param {Array} array: The array over which to iterate.
* @param {Number} number: Identifies first <number> of items in <array> to return.
* @returns {Array} array: The first <number> items of <array>.
*/ 
function first(array, number) {
    if(!Array.isArray(array) || number < 0) {
        return [];
    } else if(typeof number !== 'number'){
        return array[0];
    } else if (number > array.length) {
        return array;
    }  else { 
        return array.slice(0, number);
    }
}
module.exports.first = first;


/***
* last: Designed to loop over an array and return the last <number> items of <array>.
* If <number> is not given or not a number, returns just the last element in <array>.
* If <array> is not an array, returns []
* 
* @param {Array} array: The array over which to iterate.
* @param {Number} number: Identifies last <number> of items in <array> to return.
* @returns {Array} array: The last <number> items of <array>.
*/ 
function last(array, number) {
    if(!Array.isArray(array) || number < 0) {
        return [];
    } else if(typeof number !== 'number'){
        return array[array.length - 1];
    } else if (number > array.length) {
        return array;
    }  else { 
        return array.slice(number - 1);
    }
}
module.exports.last = last;



/***
* indexOf: Loops through <array> to determine the first occurrance of <value> & returns its index.
* Returns -1 if <value> is not in <array>.
* 
* @param {Array} arr: The array being checked for occurences of <value>.
* @param {Value} val: Identifies the <value> being looked for within <array>.
* @returns {Number} i: Index of <array> that is the first occurrance of <value> or -1 if <value> is not in <array>.
*/ 
function indexOf(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        } 
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection
 * @returns {Undefined}: <Undefined>.
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/** contains: Loops over a given <array> to determine whether the <value> exists within the <array>.
* Returns true if <array> contains <value>. Returns false otherwise.
*
* @param {Array} arr: The array over which to search.
* @param {Value} val: The value that is being searched for. 
* @returns {Boolean} x: True if <array> contains <value>. Returns false otherwise.
*/
function contains(arr, val) {
    let x = false;
    for (let i = 0; i < arr.length; i++) {
        (arr[i] === val) ? x = true : x;    
    }
    return x;
}
module.exports.contains = contains;


/** _.unique: Loops over a given <array> and returns a new array of all elements from <array> with duplicates removed.
* 
* @param {Array} arr: The intial array that duplicates will be removed from.
* @returns {Array} newArr: a new array of all elements from <array> with duplicates removed. 
*/
function unique(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (_.indexOf(arr, arr[i]) === i) {
            newArr.push(arr[i]);
        }
    } 
    return newArr;
}
module.exports.unique = unique;


/** filter: Loops over a given <array> and returns a new array of elements for which calling <function> returned true.
* 
* @param {Array} arr: The initial array in which each element will be tested with <function> in order to return true or false.
* @param {Function} func: The <function> through which <array> element will be passed.
* @returns {Array} newArr: A new array of elements for which calling <function> returned true.
*/
function filter(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    } 
    return newArr;
}
module.exports.filter = filter;


/** reject: Loops over a given <array> and returns a new array of elements for which calling <function> returned false.
* 
* @param {Array} arr: The initial array in which each element will be tested with <function> in order to return true or false.
* @param {Function} func: The <function> through which <array> element will be passed.
* @returns {Array} newArr: A new array of elements for which calling <function> returned false.
*/
function reject(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    } 
    return newArr;
}
module.exports.reject = reject;


/** _.partition: Loops over a given <array> and returns a new array partitioned into 2 arrays. One new array for each truthy and falsey results from passing <array> elements to <function>.
* 
* @param {Array} arr: The initial array in which each element will be tested with <function> in order to return true or false.
* @param {Function} func: The <function> through which <array> element will be passed.
* @returns {Array}: A new array partitioned into 2 arrays, one truthy & one falsey.
*/
function partition(arr, func) {
    let falseArr = [];
    let trueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            trueArr.push(arr[i]);
        } else {
            falseArr.push(arr[i]);
        }
    } 
    return Array(trueArr, falseArr);
}
module.exports.partition = partition;


/** map: Returns a new array with the results from calling <function> for each element in <collection>.
* 
* @param {Collection} collection: The initial <collection> in which each element will be tested with <function> in order to return a result.
* @param {Function} func: The <function> through which <collection> elements will be passed.
* @returns {Array} newArr: A new array with the results from calling <function> for each element in <collection>.
*/
function map(collection, func) {
    let newArr = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArr.push(func(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            newArr.push(func(collection[key], key, collection));
        }
 }
 return newArr;
}
module.exports.map = map;



/** pluck: Takes in an array of objects and returns an array containing the value of <property> for every element(object) in <array>
* 
* @param {Array of objects} array: The initial <array> of objects which must be searched to return the <property> values.
* @param {Property} prop: The <property> searched for within an object contained within the <array>.
* @returns {Array} result: An array containing the value of <property> for every element in <array>.
*/
function pluck(array, prop) {
    let result = _.map(array, function(current){
        if (current.hasOwnProperty(prop)) {
            return current[prop];
        }
    })
    return result;
}
module.exports.pluck = pluck;



/** _.every: Loops through a <collection>, passing each element into <function> and returns true if the return value of calling <function> for every element is true. Returns false otherwise.
If <function> is not provided, returns true if every element is truthy, otherwise returns false
*
* @param {Collection} collection: The <collection> that is iterated through & each element passed through <function> to determine if true or false.
* @param {Function} func: The <function> through which each element is passed, determined to be true or false.
* @returns {Boolean}: True if the return value of calling <function> for every element is true. Returns false otherwise
*/
function every(collection, func) {
    if (Array.isArray(collection)) {
        if (func === undefined) {
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) {
                    return false;
                }
            }
        } else {
            for (let i = 0; i < collection.length; i++) {
                if (!func(collection[i], i, collection)) {
                    return false;
                }
            }
        }
    } else {
        if(func === undefined) {
            for (let key in collection) {
                if (!collection[key]) {
                    return false;
                }
            }    
        } else { 
            for (let key in collection) {
                if (!func(collection[key], key, collection)) {
                    return false;
                }
            }
        }
    }
    return true;
}
module.exports.every = every;


/** _.some: Loops through a <collection>, passing each element into <function> and returns true if the return value of calling <function> on any element is true. Returns false otherwise.
If <function> is not provided, returns true if at least one element is truthy, otherwise returns false.
*
* @param {Collection} collection: The <collection> that is iterated through & each element passed through <function> to determine if true or false.
* @param {Function} func: The <function> through which each element is passed, determined to be true or false.
* @returns {Boolean}: True if the return value of calling <function> for at least one element is truthy, otherwise returns false.
*/
function some(collection, func) {
    if (Array.isArray(collection)) {
        if (func === undefined) {
            for (let i = 0; i < collection.length; i++) {
                if (collection[i]) {
                    return true;
                }
            }
        } else {
            for (let i = 0; i < collection.length; i++) {
                if (func(collection[i], i, collection)) {
                    return true;
                }
            }
        }
    } else {
        if(func === undefined) {
            for (let key in collection) {
                if (collection[key]) {
                    return true;
                }
            }    
        } else { 
            for (let key in collection) {
                if (func(collection[key], key, collection)) {
                    return true;
                }
            }
        }
    }
    return false;
}
module.exports.some = some;



/** reduce:  Calls <function> for every element in <collection> passing the arguments: previous result, element, index.
* Uses the return value of <function> as the "previous result" for the next iteration.
* On the very first iteration, use <seed> as the "previous result".
* If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
* After the last iteration, return the return value of the final <function> call.
*
* @param {Array} array: The <collection> that is iterated through & each element passed through <function> to determine if true or false.
* @param {Function} func: The <function> through which each element is passed, determined to be true or false.
* @param {Seed} seed: The seed value is optional, and initializes the result value of the function.
* @returns {Value} result: The result of accumulating the previous results of <array> elements passed through <function>.
*/
function reduce(array, func, seed) {
    let result;
    if (seed === undefined) {
        result = array[0];
        for (let i = 1; i < array.length; i++) {
            result = func(result, array[i], i);
        }
    } else {
        result = seed;
        for (let i = 0; i < array.length; i++) {
            result = func(result, array[i], i);
        }
    }
    return result;
}
module.exports.reduce = reduce;


/** _.extend: Copies properties from <object 2> to <object 1> & returns an updated <object1>.
* Note: here ...args is used to allow as many <object> arguments as needed, passing the last <object> into the next to last <object> until everything is in <object1>. 
* 
* @param {Object} args: The <object> that is being mutated or copied into.
* @param {Object} args: The <object> that is being copied into <object1>.
* @returns {Object} args: The result of all previous <objects> copied into <object1>.
*/
function extend(...args) {
    return Object.assign(...args);
} 
module.exports.extend = extend;


