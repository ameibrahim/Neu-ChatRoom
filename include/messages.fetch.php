<?php

    include "chatroom-db-connect.script.php"; 

    $conn = OpenConnection();

    $chatID = $_POST['chatID'];

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $query = "
        SELECT *
        FROM messages
        WHERE messages.chat_id = '$chatID'
        ORDER BY messages.message_id ASC
    ";

    $result = mysqli_query($conn,$query);

    $messages = mysqli_fetch_all($result,MYSQLI_ASSOC);

    echo json_encode($messages);

?>