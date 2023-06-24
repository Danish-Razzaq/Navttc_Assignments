<!-- Write a program to calculate factorial of a number using for
loop in PHP. -->

<?php
$number = 5; // Replace with the Any number

$factorial = 1;

for ($i = 1; $i <= $number; $i++) {
    $factorial *= $i;
}

echo ("The fectorial of $number is : $factorial ");?>