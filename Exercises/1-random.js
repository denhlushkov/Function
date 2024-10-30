'use strict';
  // Generate random Number between from min to max
  // Use Math.random() and Math.floor()
  // See documentation at MDN
const random = (min, max) => {
  if (max === undefined){
    max = min;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = { random };
