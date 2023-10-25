<?php

    include "chatroom-db-connect.script.php"; 

    $conn = OpenConnection();

    $detail = $_POST['detail'];

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $query = "
    SELECT username, email from users WHERE username = '$detail'
    OR email = '$detail'
    ";

    $result = mysqli_query($conn,$query);

    $users = mysqli_fetch_all($result,MYSQLI_ASSOC);

    echo json_encode($users);

?>