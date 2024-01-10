class Chat {

    chatID = "";
    lastSyncedMessageIDs = [];

    constructor(chatID){
        this.chatID = chatID;

        try {
            
            this.loadMessagesFrom(this.chatID)
            .then((messages) => {
                this.displayMessagesFor(personalID, messages);
            })
        }
        catch(error){
            console.log("Something Went Wrong Fetching Chat Messages: ", error);
        }
      
    }

    async loadMessagesFrom(chatID) {

        //TODO: Only load 20 message on load
    
        return new Promise((resolve,reject) => {
            let params = `chatID=${chatID}`;
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "include/messages.fetch.php", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
            xhr.onload = function(){
                if( this.status == 200 ){
                    let messages = JSON.parse(this.responseText);
                    // if(details == "") reject("Report Does Not Exist");
                    // else { resolve(details) }
                    resolve(messages);
                }
                else{
                    reject("Error Fetching User Details");
                }
            }
    
            xhr.send(params);
    
        });
    }

    loadNewMessages(){

        let lastSyncedMessageID = this.lastSyncedMessageIDs[this.lastSyncedMessageIDs.length - 1];

        return new Promise((resolve,reject) => {
            let params = `chatID=${this.chatID}&&lastSyncedMessageID=${lastSyncedMessageID}`;
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "include/new-messages.fetch.php", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
            xhr.onload = function(){
                if( this.status == 200 ){
                    let messages = JSON.parse(this.responseText);
    
                    if(messages.length != 0){

                        // TODO: Doing Only One Message at a time, needs to be multiple...
                        
                        let messageObject = { 
                            messageID: messages[0].message_id,
                            message : messages[0].message, 
                            senderID: messages[0].sender_id 
                        };
        
                        //TODO:  Time aspect is missing
                        
                        resolve(messageObject);
                    }
                    // TODO: pushMessageToView needs to be pushMessagesToView
                    
                }
                else{
                    reject("Error Fetching User Details");
                }
            }
    
            xhr.send(params);
    
        });

    }

    pushMessageToView(givenID, messageObject){

        if(this.lastSyncedMessageIDs.includes(givenID)) return
    
        let className = "";
        let nametag = "";
    
        let { messageID, message, senderID } = messageObject;

        switch(senderID){
            case givenID:
                className = "mine";
                nametag = "A";
            break;
            default:
                className = "foreign foreign-a";
                nametag = "B";
            break;
        } 
    
        // The time needs to come from the server ...
        let messageTime = new Date();
        messageTime = this.formattedTime(messageTime);
    
        let messageStructure = `
            <p class="name-tag">${nametag}</p>
            <p>${message}</p>
            <p class="time-tag">${messageTime}</p>
        `;
        
        let innerContainer = document.createElement("li");
        innerContainer.className = className;
    
        innerContainer.innerHTML = messageStructure;
    
        messageContainer.appendChild(innerContainer);

        this.lastSyncedMessageIDs.push(messageID);
    
        scrollBottom(messageContainer);
    
    }

    displayMessagesFor(givenID, messages){

        let containerHTML = "";

        let mine = {
            className : "mine",
            nametag : "M"
        }

        let foreignA = {
            className : "foreign foreign-a",
            nametag : "A"
        }

        let foreignB = {
            className : "foreign foreign-b",
            nametag : "B"
        }

        let lastID;
        let chosenProfile = foreignB;
    
        messages.forEach( message => {
    
            let className = "";
            let nametag = "";

            console.log("lastID: ", lastID, "current: ", message.sender_id);
    

            if(message.sender_id == givenID){
                chosenProfile = mine;
            }
            else if(message.sender_id == lastID){
        
            }
            else if(message.sender_id != lastID){
                chosenProfile = 
                chosenProfile.className == foreignA.className ? 
                foreignB : foreignA
                ;
            }

            className = chosenProfile.className;
            nametag = chosenProfile.nametag;
    
            // let nametag = createTag(message.username);
    
            let messageTime = new Date(message.timestamp);
            messageTime = this.formattedTime(messageTime);
            
            let messageStructure = `
                <li class="${className}">
                    <p class="name-tag">${nametag}</p>
                    <p>${message.message}</p>
                    <p class="time-tag">${messageTime}</p>
                </li>
            `;
    
            containerHTML += messageStructure;
            this.lastSyncedMessageIDs.push(message.message_id);
            lastID = message.sender_id;
    
        });
    
        messageContainer.innerHTML = containerHTML;
    
        scrollBottom(messageContainer);
    
        this.startContinuousCheckForNewMessages();
    }

    formattedTime(date){
        var time = String(date.getHours()).padStart(2,"0") + ":" + String(date.getMinutes()).padStart(2,"0");
        return time;
    }

    startContinuousCheckForNewMessages(){
        setInterval(() => {
            this.loadNewMessages().then( messageObject => {
                this.pushMessageToView(personalID, messageObject);
            });
        }, 2000);
    }

}

class Message {

    // { 
    //     message_id: "1698813915370", 
    //     chat_id: "098765", 
    //     message: "Hello", 
    //     timestamp: "2023-11-01 06:45:15", 
    //     sender_id: "abc"
    // }

    id = "";
    chatID = "";
    content = "";
    timestamp = "";
    senderID = "";

    constructor(type = "load", messageObject){

        switch(type){
            case "new":
                self.id = this.createMessageID();
                self.chatID = messageObject.chatID;
                self.content = messageObject.content;
                // self.timestamp = Date.now();
                self.senderID = messageObject.senderID;
                break;
            default:
                let {
                    message_id, 
                    chat_id,
                    message,
                    timestamp,
                    sender_id
                } = messageObject;
        
                self.id = message_id
                self.chatID = chat_id
                self.content = message
                self.timestamp = timestamp
                self.senderID = sender_id
            break;
        }
    }

    createMessageID(preText = ""){
        const date = Date.now();
        return preText + date;
    }

    addslashes( str ) {
        return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
    }

    regexCheck(message) {
        return true;
    }

    export(){
        return { 
            message_id: self.id, 
            chat_id: self.chatID, 
            message: self.content, 
            timestamp: self.timestamp, 
            sender_id: self.senderID
        }
    }

    async sendMessage() {

        let { message_id, chat_id, message, sender_id } = this.export();
    
        let params = `messageID=${message_id}&&`+
            `chatID=${chat_id}&&`+
            `message=${this.addslashes(message)}&&`+
            `senderID=${sender_id}`;
    
        return new Promise((resolve,reject) => {
    
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "include/messages.insert.php", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
            xhr.onload = function(){
                if( this.status == 200 ){
                    let result = this.responseText;
    
                    if(result != "success") reject("New Message Not Sent");
                    else { resolve(result) }
                }
                else{
                    reject("Error With PHP Script");
                }
            }
    
            xhr.send(params);
    
        });
        
        //TODO: resolve showMessageLoader() ... HARD
        //TODO: load new messages on other side of the chat.
    
    }

}

let messageContainer = document.querySelector(".messages-container");
let callView = document.querySelector(".call-card-view");
let messageTypingInput = document.querySelector(".message-typing-input");
let sendMessageButton = document.querySelector(".send-message");

/* Move to call.js */
function showCallView() { callView.style.display = "grid"; }
function hideCallView() { callView.style.display = "none"; }
function placeCall() { showCallView(); }
function endCall() { hideCallView(); }

function scrollBottom(element) {
    element.scroll({ top: element.scrollHeight, behavior: "smooth"})
}

sendMessageButton.addEventListener('click', async () => {

    let messageObject = { 
        content: messageTypingInput.value, 
        senderID: personalID,
        chatID: chat.chatID 
    }

    let message = new Message(type = "new", messageObject);
    await message.sendMessage();

    messageTypingInput.value = "";

});

// TODO: create a function that load older message when you scroll too
// far up ... test out how to append boxes as children at the beginning of the parent
