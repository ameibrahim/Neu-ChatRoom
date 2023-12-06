<?php

    include "chatroom-db-connect.script.php"; 

    $conn = OpenConnection();

    $personalID = $_POST['personalID'];

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $query = "
        SELECT chat_reference.chat_id, groups.name, groups.image
        FROM chat_reference 
        INNER JOIN users ON chat_reference.sender = users.id 
        INNER JOIN groups ON chat_reference.chat_id = groups.id
        WHERE chat_reference.sender = '$personalID' AND chat_reference.receiver = 'group';
    ";

    $result = mysqli_query($conn,$query);

    $groups = mysqli_fetch_all($result,MYSQLI_ASSOC);

    echo json_encode($groups);

?>
