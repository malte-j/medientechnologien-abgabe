fs = require('fs');

/**
 * Converts a textfile with newline-seperated values into an array
 */


fs.readFile('data-gray.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  dataArr = data.split("\n");

  // generate labels  
  console.log("[" + data.split("\n").map((x, i ) => i).join(", ") + "]");

  // generate data
  console.log("[" + data.split("\n").map(x => x.split(" ")[0]).join(", ") + "]");

  //generate colors
  console.log("[" + data.split("\n").map(x => {
    let col = x.split(" ")[0];
    return '"' + toRgb(col) + '"';
  }).join(", ") + "]");


});

const toRgb = (col) => `rgb(${col}, ${col}, ${col})`; 

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')

// lo:
// [7723, 16305, 10394, -4756, -15679, -12665, 1606, 14449, 14449, 1606, -12665, -15679, -4756, 10394, 16305, 7723, -7723, -16305, -10394, 4756, 15679, 12665, -1606, -14449, -14449, -1606, 12665, 15679, 4756, -10394, -16305, -7723, 7723, 16305, 10394, -4756, -15679, -12665, 1606, 14449, 14449, 1606, -12665, -15679, -4756, 10394, 16305, 7723, -7723, -16305, -10394, 4756, 15679, 12665, -1606, -14449, -14449, -1606, 12665, 15679, 4756, -10394, -16305, -7723, 7723, 16305, 10394, -4756, -15679, -12665, 1606, 14449, 14449, 1606, -12665, -15679, -4756, 10394, 16305, 7723]