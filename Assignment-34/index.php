<!-- You need to write a program in PHP using for...each loop to remove specific elements by value from an array using PHP program.
Hint:
•	Take an array with list of month names.
•	Take a variable with the name of value to be deleted	 -->



<?php
$months = [
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

$deletedMonth = "January";

foreach ($months as $key => $month) {
    if ($month === $deletedMonth) {
        unset($months[$key]);
    }
}

foreach ($months as $month) {
    print $month . " <br> ";
}
?>