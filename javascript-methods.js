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
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};
