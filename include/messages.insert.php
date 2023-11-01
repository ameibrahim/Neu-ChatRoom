<?php

    include "chatroom-db-connect.script.php"; 

    $conn = OpenConnection();

    $messageID = $_POST['messageID'];
    $chatID = $_POST['chatID'];
    $message = htmlentities($_POST['message']);

    // $message = mysql_real_escape_string("" . $message);
    $senderID = $_POST['senderID'];

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $query = "
        INSERT INTO messages (message_id, chat_id, message, sender_id)
        VALUES ('$messageID', '$chatID', '$message', '$senderID')
    ";

    $result = mysqli_query($conn,$query);

    if($result) echo "success";

?>