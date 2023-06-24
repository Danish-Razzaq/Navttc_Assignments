<!-- Use the Switch statement of PHP to display the current day of the week. -->

<?php
$dayOfWeek = date("l");
// echo "Today is " . $dayOfWeek;
switch ($dayOfWeek) {
    case 'Sunday':
        echo " Today is Sunday";
        break;
    case 'Monday':
        echo " Today is Monday";
        break;
    case 'Tuesday':
        echo " Today is Tuesday";
        break;
    case 'Wednesday':
        echo " Today is Wednesday";
        break;
    case 'Thursday':
        echo " Today is Thursday";
        break;
    case 'Friday':
        echo " Today is Friday";
        break;
    case 'Saturday':
        echo " Today is Saturday";
        break;
    default:
        echo " Data Is Nothing Accessible";
        break;
}
?>