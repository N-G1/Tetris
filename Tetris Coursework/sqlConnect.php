<?php
$db = "tetris";
$server = "127.0.0.1";
$user = "superuser";
$passwd = "root";
$conn = mysqli_connect($server, $user, $passwd, $db);

if (!$conn) {
    die("Connection failed, error: " . mysqli_connect_error());
}
echo "Connected successfully!";
?>