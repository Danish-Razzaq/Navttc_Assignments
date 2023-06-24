<!-- Use the If...else statement of PHP to write a code to Display
“Good Morning” or “Good Afternoon” according to current time. -->

<?php
$currentTime = date("H:i:s");
echo $currentTime . '  ';
if ($currentTime >= "06:00:00" && $currentTime < "12:00:00") {
    echo ('Good Morning');
} else if ($currentTime >= "12:00:00" && $currentTime <= "18:00:00") {
    echo ('Good Afternoon');
} else {
    echo ('Good Night');
}
?>