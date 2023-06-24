// Write a Program to create following pattern using while loop:
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********

console.log("while loop");

let i = 1;
let pattern = "";

while (i <= 8) {
  pattern += "*";
  console.log(pattern);
  i++;
}
console.log(" do while ");
let j = 1;
let patterns = "";
do {
  patterns += "*";
  console.log(patterns);
  j++;
} while (j < 8);

console.log(" for loop ");

let patternss = "";
for (let k = 1; k <= 8; k++) {
  patternss += "*";
  console.log(patternss);
}
