<?php
    $host = 'localhost';
    $user = 'user';
    $passwd = 'user';
    $db = 'employee';
    $conn = mysqli_connect( $host, $user, $passwd ) or
    die("Could not conn to server ... \n" . mysqli_error());

    $conn->select_db( $db )
    or die("Could not conn to database ... \n" . mysqli_error());

?>