const sculptureList = require('./data.js');

// Create empty array to store the new objects
const sculptureListLengths = [];

// Loop through each sculpture object
for (const sculpture of sculptureList) {

    // Create a new empty object for this sculpture
    const lengthsObj = {};

    // Loop through each key in the sculpture object
    for (const key in sculpture) {
        const value = sculpture[key];

        // Store the length of each value (string length)
        lengthsObj[key] = value.length;
    }

    sculptureListLengths.push(lengthsObj);
}

// Log results
console.log(sculptureListLengths);
