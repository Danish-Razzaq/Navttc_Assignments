<!-- Write a Program to display count, from 5 to 15 (as shown below) using following: -->

<!-- •	For Loop -->

<?php
for ($i = 5; $i <= 15; $i++) {
    echo ($i . '  ');
}

?>


<!-- •	While Loop -->

<?php
$i = 0;
while ($i <= 15) {
    echo ($i . '  ');
    $i++;
}
?>


<!-- • Do While Loop -->

<?php
$i = 0;
do {
    echo ($i . '  ');
    $i++;
}
while ($i <= 15)
?>