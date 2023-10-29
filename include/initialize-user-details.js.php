<?php 
    echo "<script> 
    const USER_NAME = '".$_SESSION['username']."';
    const USER_EMAIL = '".$_SESSION['email']."';
    const USER_ID = '".$_SESSION['id']."';

    console.log(USER_ID)
    
    </script>"; 
?>