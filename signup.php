<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/buttons.css">
    <link rel="stylesheet" href="css/inputs.css">

    <script src="js/index.js" defer></script>

</head>
<body>

    <form class="login-container">
        <h1>signup</h1>
        <input onchange="compareGivenUsername(this)" type="text" required class="bordered background-dark username-field" placeholder="username">
        <input onchange="compareGivenEmail(this)" type="text" required class="bordered background-dark email-field" placeholder="email">
        <input onchange="checkPasswordStrength(this)" type="password" required class="bordered background-dark password-field" placeholder="new password">
        <div onclick="confirmDetails(this)" class="button background-dark">signup</div>
    </form>

</body>
</html>