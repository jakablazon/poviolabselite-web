<?php

$email = substr($_POST["email"], 0, 100);
$myfile = file_put_contents('1e6b5c67e803ea91fa117c3c6023dfdd.txt', $email.PHP_EOL , FILE_APPEND | LOCK_EX);

?>
