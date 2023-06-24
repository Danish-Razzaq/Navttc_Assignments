// Use If...else statement of JavaScript to write a code to Display “Good Morning” or “Good Afternoon” according to current Time.


let hours = new Date();
let current_time = hours.getHours();
if (current_time >= 6 && current_time < 12) {
  console.log("Good morning!");
} else if (current_time >= 12 && current_time <= 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good neight!");
}
