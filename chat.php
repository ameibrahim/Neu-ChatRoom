<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChatRoom</title>
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="call.css">
 

    <?php 
        echo "<script> 
        const USER_NAME = '".$_SESSION['username']."';
        const USER_EMAIL = '".$_SESSION['email']."';
        const USER_ID = '".$_SESSION['id']."';

        console.log(USER_ID)
        
        </script>"; 
    ?>
    <script src="index.js" defer></script>
</head>
<body>

    <div class="main-container">
        <div class="chat-container">
            <div class="message-header">
                <!-- <div class="blur"></div> -->
                <div class="chat-logo">
                    <img src="image.jpg" alt="group shot">
                </div>
                <p class="message-header-title"></p>
                <p class="members">( 2 Members )</p>

                <div onclick="placeCall()" class="call-action-button pickup small-size">
                    <img src="green-call.png" alt="">
                </div>
            </div>

            <ul class="messages-container">
                <li class="mine">
                    <p class="name-tag">IA</p>
                    <p>Hello</p>
                    <p class="time-tag">12:34 am</p>
                </li>
                <li class="foreign foreign-a">
                    <p class="name-tag">CD</p>
                    <p>Hello</p>
                    <p class="time-tag">12:34 am</p>
                </li>
                <li class="foreign foreign-a">
                    <p class="name-tag">CD</p>
                    <p>My Name is Ibrahim Ame, I am a student at your university.
                        I need some help with my email account. I can't access it.</p>
                    <p class="time-tag">12:35 am</p>
                </li>
                <li class="foreign foreign-a">
                    <p class="name-tag">CD</p>
                    <p>Hello Ibrahim, I would love to assist you with your account.</p>
                <p class="time-tag">12:35 am</p>
                </li>
                <li class="foreign foreign-a">
                    <p class="name-tag">CD</p>
                    <p>We can send you a password reset link to your regular email address, and then you can regain access to your account.</p>
                <p class="time-tag">12:36 am</p>
                </li>

                <li class="mine">
                    <p class="name-tag">IA</p>
                    <p>That would be amazing.</p>
                <p class="time-tag">12:36 am</p>
                </li>

                <li class="mine">
                    <p class="name-tag">IA</p>
                    <p>My email is ame.ibrahim@yahoo.com</p>
                <p class="time-tag">12:36 am</p>
                </li>

                <li class="foreign foreign-a">
                    <p class="name-tag">CD</p>
                    <p>Expect an email within the next 5 minutes. Have a great day.</p>
                <p class="time-tag">12:37 am</p>
                </li>

                <!-- <li class="foreign foreign-b">
                    <p class="name-tag" >JK</p>
                    <p>Expect an email within the next 5 minutes. Have a great day.</p>
                <p class="time-tag">12:37 am</p>
                </li>

                <li class="foreign foreign-b">
                    <p class="name-tag" >JK</p>
                    <p>Expect an email within the next 5 minutes. Have a great day.</p>
                <p class="time-tag">12:37 am</p>
                </li>

                <li class="foreign foreign-a">
                    <p class="name-tag" >CD</p>
                    <p>Expect an email within the next 5 minutes. Have a great day.</p>
                <p class="time-tag">12:37 am</p>
                </li> -->
            </ul>

            <div class="message-footer">
                <div class="typing-area">
                    <!-- <div class="add-attachment">
                        <img src="plus.png" alt="">
                    </div> -->
                    <input type="text" placeholder="Type a message ..." class="message-typing-input">
                    <div class="send-message">
                        <img src="send.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="call-card-view">

            <div class="blurred-background">
                <img src="person.jpg"/>
            </div>

            <div class="background-view"></div>

            <div class="circle-animation">
                <div class="circle one"></div>
                <div class="circle two"></div>
                <div class="circle three"></div>
            </div>
      
            <div class="caller-details">
              <div class="circle-container">
                <img src="person.jpg" class="call-image"/>
              </div>
              <p class="phoneNumber">Abdul Munim</p>
              <p class="calling">Calling</p>
            </div>
      
            <div class="call-actions caller">
              <div onclick="endCall()" class="call-action-button hangup">
                  <img src="red-call.png" alt="">
              </div>
              <!-- <div class="call-action-button pickup">
                  <img src="green-call.png" alt="">
              </div> -->
            </div>
          </div>

    </div>

    
</body>
</html>