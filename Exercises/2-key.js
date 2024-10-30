'use strict';
  // Generate string of random characters
  // Use Math.random() and Math.floor()
  // See documentation at MDN
const generateKey = (length, possible) => {
  const st = possible.length;
  let wor = '';
  for (let i = 0; i < length; i++){
    const id = Math.floor(Math.random() * st);
    wor += possible[id];
  }
  return wor;
  
};

module.exports = { generateKey };
