<?php
  session_start();
  if(isset($_SESSION['patient-username'])){ header('location:./'); }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/buttons.css">
    <link rel="stylesheet" href="css/inputs.css">

    <script src="js/login.js"></script>

</head>
<body>

    <div class="login-container">
        <h1>login</h1>
        <input type="text" required class="bordered background-dark username-field" placeholder="username">
        <input type="password" required class="bordered background-dark password-field" placeholder="password">
        <div class="button background-dark" onclick="PrepareForLogin()">login</div>
    </div>

</body>
</html>