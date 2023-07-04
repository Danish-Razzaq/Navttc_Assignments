<!-- Write a PHP function that checks whether a string is all lowercase.-->

<?php

$stdName = 'Danish';

// to check that name is or not in all lower case we use a methode ctype_lower


if (ctype_lower($stdName)) {
    echo "Name is all lower case";
} else {
    echo ("Name is Not lower Case"); //here this condition  will be exicuted because name not in lowercase.
}
?>