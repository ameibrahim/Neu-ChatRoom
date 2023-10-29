<?php
  session_start();

  $user = isset($_SESSION['username']);

  if($user){ include 'contacts.php'; }
  else{ header('location:./login.php'); }
  
?>