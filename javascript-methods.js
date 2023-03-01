// Nick Melkadze
// Intro to Web Development
// Assignment #2: JavaScript Methods

/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
    // Loop through the entire array
    for (let i = 0; i < this.length; i++) {
        // Apply the function to all elements
        this[i] = callbackFn(this[i])
    }
    
    // Use the current, modified array as our return
    return this
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    // Make a new array to return
    toReturn = []
    
    // Loop through the entire array
    for (let i = 0; i < this.length; i++) {
        // If the current element passes the filter,
        // add it to our return array
        if (callbackFn(this[i])) {
            toReturn.push(this[i])
        }
    }
    
    // Return the array we were working on
    return toReturn
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    // Loop through the entire array
    for (let i = 0; i < this.length; i++) {
        // Once we find a true item, stop and return true
        if (callbackFn(this[i])) {
            return true
        }
    }
    
    // If no true items found, return false
    return false
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    // Loop through the entire array
    for (let i = 0; i < this.length; i++) {
        // Once we find a false item, stop and return false
        if (!callbackFn(this[i])) {
            return false
        }
    }
    
    // If no false items found, return true
    return true
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
    // Set the value of the last result to the first element
    lastResult = this[0]
    
    // Loop through the entire array but skipping the first element
    // (as we have already set it as the last result)
    for (let i = 1; i < this.length; i++) {
        // Set the result to be the reducer function of the last
        // result and the current element
        // (in form callbackFn(<callbackFn of previous element>,
        //          <this element>, <this element's index>)
        lastResult = callbackFn(lastResult, this[i], i)
    }
    
    // Return the last result we calculated
    return lastResult
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
    // Loop through the entire array
    for (let i = 0; i < this.length; i++) {
        // Once we find the item, stop and return true
        if (this[i] == searchElement) {
            return true
        }
    }
    
    // If the item was not found, return false
    return false
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
    // Loop through the entire array
    for (let i = 0; i < this.length; i++) {
        // Once we find the item, stop and return its index
        if (this[i] == searchElement) {
            return i
        }
    }
    
    // If the item was not found, return -1
    return -1
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
    // Set a variable to store the (current) last index, which
    // we set to -1 in case we don't find the element
    lastIndex = -1
    
    // Loop through the entire array
    for (let i = 0; i < this.length; i++) {
        // Once we find the item, update the last index
        if (this[i] == searchElement) {
            lastIndex = i
        }
    }
    
    // Return the last index (or -1 if not found)
    return lastIndex
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};






array1 = [2, 9, 10, 5, 9];
map1 = array1.lastIndexOf(9);
console.log(map1);

array2 = [2, 9, 10, 5, 9];
map2 = array2.myLastIndexOf(9);
console.log(map2);
