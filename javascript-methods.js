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
    for (let i = 0; i < this.length; i++) {
        this[i] = callbackFn(this[i])
    }
    
    return this
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    toReturn = []
    
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i])) {
            toReturn.push(this[i])
        }
    }
    
    return toReturn
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    // Loop through entire array
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
  // Place your code here.
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


function filt(value) {
    return value >=10
}

array1 = [1, 4, 10, 5, 9];
map1 = array1.some(filt);
console.log(map1);

array2 = [1, 4, 10, 5, 9];
map2 = array2.mySome(filt);
console.log(map2);
