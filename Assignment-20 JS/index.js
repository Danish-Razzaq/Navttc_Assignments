// // Use the switch statement to display “today is (whatever day it is)” according to the current day.

let currentDate = new Date();
let currentDay = currentDate.getDay();

let dayOfWeek;
switch (currentDay) {
  case 0:
    dayOfWeek = "Sunday";
    break;
  case 1:
    dayOfWeek = "Monday";
    break;
  case 2:
    dayOfWeek = "Tuesday";
    break;
  case 3:
    dayOfWeek = "Wednesday";
    break;
  case 4:
    dayOfWeek = "Thursday";
    break;
  case 5:
    dayOfWeek = "Friday";
    break;
  case 6:
    dayOfWeek = "Satureday";
    break;

  default:
    dayOfWeek = "Unknown";
    break;
}
console.log(`Today is ${dayOfWeek}.`);
