<?php
  session_start();

  $user = isset($_SESSION['username']);

  if($user){ include 'chat.php'; }
  else{ header('location:./login.php'); }
  
?>