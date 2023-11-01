<?php

    include "chatroom-db-connect.script.php"; 

    $conn = OpenConnection();

    $personalID = $_POST['personalID'];

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $query = "
        SELECT chat_reference.combo_id, chat_reference.chat_id, chat_reference.receiver, chat_reference.sender, users.email, users.username
        FROM chat_reference
        INNER JOIN users ON chat_reference.receiver = users.id
        WHERE sender = '$personalID'
    ";

    $result = mysqli_query($conn,$query);

    $contacts = mysqli_fetch_all($result,MYSQLI_ASSOC);

    echo json_encode($contacts);

?>