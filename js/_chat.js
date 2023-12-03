// let messageContainer = document.querySelector(".messages-container");
// let callView = document.querySelector(".call-card-view");
// let lastSyncedMessageID = "";

// /* Move to call.js */
// function showCallView() { callView.style.display = "grid"; }
// function hideCallView() { callView.style.display = "none"; }
// function placeCall() { showCallView(); }
// function endCall() { hideCallView(); }


// /* Move to UtilFunctions.js */
// function createMessageID(preText = ""){
//     const date = Date.now();
//     return preText + date;
// }

// function formattedTime(date){
//     var time = String(date.getHours()).padStart(2,"0") + ":" + String(date.getMinutes()).padStart(2,"0");
//     return time;
// }

// function addslashes( str ) {
//     return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
// }

// function scrollBottom(element) {
//     element.scroll({ top: element.scrollHeight, behavior: "smooth"})
// }
// /* End of Util Functions*/

// async function loadMessagesFrom(chatID) {

//     //TODO: Only load 20 message on load

//     return new Promise((resolve,reject) => {
//         let params = `chatID=${chatID}`;
//         let xhr = new XMLHttpRequest();
//         xhr.open("POST", "include/messages.fetch.php", true);
//         xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//         xhr.onload = function(){
//             if( this.status == 200 ){
//                 let messages = JSON.parse(this.responseText);

//                 console.log("messages: ", messages);
//                 displayMessagesFor(personalID, messages);
//                 // if(details == "") reject("Report Does Not Exist");
//                 // else { resolve(details) }
//                 resolve(messages);
//             }
//             else{
//                 reject("Error Fetching User Details");
//             }
//         }

//         xhr.send(params);

//     });
// }



// function displayMessagesFor(givenID, messages){

//     let containerHTML = "";
//     // console.log("messages: ", messages);

//     messages.forEach( message => {

//         let className = "";
//         let nametag = "";

//         switch(message.sender_id){
//             case givenID:
//                 className = "mine";
//                 nametag = "A";
//             break;
//             default:
//                 className = "foreign foreign-a";
//                 nametag = "B";
//             break;
//         } 

//         // let nametag = createTag(message.username);

//         let messageTime = new Date(message.timestamp);
//         messageTime = formattedTime(messageTime);
        
//         let messageStructure = `
//             <li class="${className}">
//                 <p class="name-tag">${nametag}</p>
//                 <p>${message.message}</p>
//                 <p class="time-tag">${messageTime} am</p>
//             </li>
//         `;

//         containerHTML += messageStructure;
//         lastSyncedMessageID = message.message_id;

//     });

//     messageContainer.innerHTML = containerHTML;

//     scrollBottom(messageContainer);

//     startContinuousCheckForNewMessages();
// }

// function pushMessageToView(givenID, messageObject){

//     let className = "";
//     let nametag = "";

//     let { messageID, message, senderID } = messageObject;
//     // Standardize how you name these variables across MYSQL and JS

//     switch(senderID){
//         case givenID:
//             className = "mine";
//             nametag = "A";
//         break;
//         default:
//             className = "foreign foreign-a";
//             nametag = "B";
//         break;
//     } 

//     // The time needs to come from the server ...
//     let messageTime = new Date();
//     messageTime = formattedTime(messageTime);

//     let messageStructure = `
//         <p class="name-tag">${nametag}</p>
//         <p>${message}</p>
//         <p class="time-tag">${messageTime} am</p>
//     `;
    
//     let innerContainer = document.createElement("li");
//     innerContainer.className = className;

//     innerContainer.innerHTML = messageStructure;

//     messageContainer.appendChild(innerContainer);

//     lastSyncedMessageID = messageID;

//     scrollBottom(messageContainer);

// }

// let messageTypingInput = document.querySelector(".message-typing-input");
// let sendMessageButton = document.querySelector(".send-message");

// sendMessageButton.addEventListener('click', async () => {

//     let message = messageTypingInput.value;

//     if (!regexCheck(message)){

//         console.log("ISSSSUEEES")
//         // showAlert("Your message seems to contain malicious content")
//     }
//     else{

//         let messageObject = { 
//             messageID: createMessageID(), 
//             chatID: globalChatID, 
//             message, 
//             senderID: personalID 
//         }

//         await sendMessage(messageObject);

//         // What happens when the user presses enter
//         messageTypingInput.value = "";
//         pushMessageToView(personalID, messageObject);

//         // showMessageLoaderPromise();
//     }
// });

// function regexCheck(message) {
//     return true;
// }

// async function sendMessage(messageObject) {

//     let { messageID, chatID, message, senderID } = messageObject;

//     let params = `messageID=${messageID}&&`+
//         `chatID=${chatID}&&`+
//         `message=${addslashes(message)}&&`+
//         `senderID=${senderID}`;

//     return new Promise((resolve,reject) => {

//         let xhr = new XMLHttpRequest();
//         xhr.open("POST", "include/messages.insert.php", true);
//         xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//         xhr.onload = function(){
//             if( this.status == 200 ){
//                 let result = this.responseText;
//                 console.log(result);

//                 if(result != "success") reject("New Message Not Sent");
//                 else { resolve(result) }
//             }
//             else{
//                 reject("Error With PHP Script");
//             }
//         }

//         xhr.send(params);

//     });
    
//     //TODO: -- DONE Prepare message with table header values
//     //TODO: -- DONE Send message using AJAX
//     //TODO: resolve showMessageLoader() ... HARD
//     //TODO: load new messages on other side of the chat.

// }

// function loadNewMessages(chatID, lastSyncedMessageID){

//     return new Promise((resolve,reject) => {
//         let params = `chatID=${chatID}&&lastSyncedMessageID=${lastSyncedMessageID}`;
//         let xhr = new XMLHttpRequest();
//         xhr.open("POST", "include/new-messages.fetch.php", true);
//         xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//         xhr.onload = function(){
//             if( this.status == 200 ){
//                 let messages = JSON.parse(this.responseText);
//                 console.log(messages);


//                 if(messages.length != 0){
//                     let messageObject = { 
//                         messageID: messages[0].message_id,
//                         message : messages[0].message, 
//                         senderID: messages[0].sender_id 
//                     };
    
//                     //TODO:  Time aspect is missing
    
//                     pushMessageToView(personalID, messageObject);
//                 }
//                 // pushMessageToView needs to be pushMessagesToView
//                 // displayMessagesFor(personalID, messages);
//                 // if(details == "") reject("Report Does Not Exist");
//                 // else { resolve(details) }
//                 resolve(messages);
//             }
//             else{
//                 reject("Error Fetching User Details");
//             }
//         }

//         xhr.send(params);

//     });

//     //TODO: use the lastSyncedMessageID to filter all the newest messages from the database ... K.I
//     //TODO: return the values and repopulate the view
// }

// async function startContinuousCheckForNewMessages(){
//     setInterval(() => {
//         loadNewMessages(globalChatID,lastSyncedMessageID);
//     }, 4000);
// }

// // TODO: create a function that load older message when you scroll too
// // far up ... test out how to append boxes as children at the beginning of the parent
