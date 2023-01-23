
/***
* identity: takes an input value and returns it, unchanged.
* 
* @param {Any} value: The input value that will be returned as is.
*/ 
_.identity = function(value) {
    return value;
}
module.exports.identity = identity;


/***
* typeOf: Returns the data type of the input <value> as a string
* @param {Any} value: The value for which type is to be determined.
*/ 
_.typeOf = function(value) {
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
*/ 
_.first = function(array, number) {
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
*/ 
_.last = function(array, number) {
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
* indexOf: Returns the index of <array> that is the first occurrance of <value>.
* Returns -1 if <value> is not in <array>.
* 
* @param {Array} arr: The array being checked for occurences of <value>.
* @param {Value} val: Identifies the <value> being looked for within <array>.
*/ 
_.indexOf = function(arr, val) {
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
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
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
