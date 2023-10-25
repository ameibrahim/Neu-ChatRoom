<?php

    include "chatroom-db-connect.script.php"; 

    // TODO: Security
    // TODO: More validation checks
    // TODO: More Error messages
    // TODO: User roles direct to different pages

    $conn = OpenConnection();

    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $select_query = " 
        SELECT id, username, email
        FROM users WHERE username = '$username' && password = '$password'
    ";
    
    $result = mysqli_query($conn,$select_query);
    $row = mysqli_fetch_array($result);
    
    CloseConnection($conn);
    
    $rowCount = mysqli_num_rows($result);
    $toReturn = json_encode(array("error" => "Login Details Did Not Match"));

    if( $rowCount == 1 ){

        $_SESSION['id'] = $row[0];
        $_SESSION['username'] = $row[1];
        $_SESSION['email'] = $row[2];
        $toReturn = json_encode($row);

    }    
    
    echo $toReturn;

?>