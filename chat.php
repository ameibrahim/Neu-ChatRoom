<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
 -->
 <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
    <title>ChatRoom</title>
    <link rel="stylesheet" href="css/contacts.css?2">
    <link rel="stylesheet" href="css/chat.css?10">
    <link rel="stylesheet" href="css/call.css">
    <?php include 'include/initialize-user-details.js.php'; ?>
    <script src="js/contacts.js?6" defer></script>
    <script src="js/ChatClass.js?4" defer></script>
</head>
<body>

    <!-- TODO: - DONE: create a parent file to house all the chat IDs -->

    <div class="main-container">
        <div class="inner-view contacts-view">
            <div class="personal-header">
                <p></p>
                <span class="action-icon">
                    <img src="images/icons/fi-rr-arrow-alt-square-left.svg" alt="">
                </span>
                <div class="avatar">
                    <img src="images/image.jpg">
                </div>
            </div>
    
            <div class="contacts-container">
            </div>
        </div>

        <div class="inner-view chat-view" onclick="slideInContactsView()">
                <div class="message-header">
                    <span class="action-icon back-button" onclick="slideOutChatView()">
                        <img src="images/icons/fi-rr-arrow-alt-left.svg" alt="">
                    </span>
                    <div class="chat-logo">
                        <img src="images/person.jpg" alt="group shot">
                    </div>
                    <p class="message-header-title"></p>
                    <p class="members"></p>
    
                    <div onclick="placeCall()" class="call-action-button pickup small-size">
                        <img src="images/green-call.png" alt="">
                    </div>
                </div>
    
                <ul class="messages-container">
                    
                </ul>
    
                <div class="message-footer">
                    <div class="typing-area">
                        <!-- <div class="add-attachment">
                            <img src="images/plus.png" alt="">
                        </div> -->
                        <input type="text" placeholder="Type a message ..." class="message-typing-input">
                        <div class="send-message">
                            <img src="images/send.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="call-card-view">
    
                <div class="blurred-background">
                    <img src="images/person.jpg"/>
                </div>
    
                <div class="background-view"></div>
    
                <div class="circle-animation">
                    <div class="circle one"></div>
                    <div class="circle two"></div>
                    <div class="circle three"></div>
                </div>
          
                <div class="caller-details">
                  <div class="circle-container">
                    <img src="images/person.jpg" class="call-image"/>
                  </div>
                  <p class="phoneNumber">Abdul Munim</p>
                  <p class="calling">Calling</p>
                </div>
          
                <div class="call-actions caller">
                  <div onclick="endCall()" class="call-action-button hangup">
                      <img src="images/red-call.png" alt="">
                  </div>
                  <!-- <div class="call-action-button pickup">
                      <img src="images/green-call.png" alt="">
                  </div> -->
                </div>
            </div>
        
        </div>

    </div>

    
</body>
</html>