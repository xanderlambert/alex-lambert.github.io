



_.identity = function(value) {
    return value;
}


_.typeOf = function(value) {
    if(Array.isArray(value)) {
        return 'array';
    } else if(value === null){
        return 'null';
    } else {
        return typeof value;
    }  
}

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
