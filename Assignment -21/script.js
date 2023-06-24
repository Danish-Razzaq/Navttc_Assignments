// Use of loop to display a string of all the names of months using JS functions and variables.

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let result = "";
for (let index in months) {
  result += months[index];
  if (index != months.length - 1) {
    result += ", ";
  }
}
console.log(result);
