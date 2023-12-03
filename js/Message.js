class Message {

    /* Base values for a message */
    message;
    messageID;
    timestamp;
    senderID; // Never Changes For a user
    chatID; // Never Changes For a chat
    nameTag; // Never Changes For a user

    init(messageServerObject /* { message: "", timestamp: "" ... } */) {

        let { 
            message, 
            timestamp, 
            senderID, 
            chatID, 
            messageID, 
            nametag 
        } = messageServerObject
       
        self.message = message
        self.messageID = messageID
        self.timestamp = timestamp
        self.senderID = senderID
        self.chatID = chatID
        self.nametag = nametag;

    }

    /* A function to display one singular message */
    buildView(againstID = this.senderID) {

        let className = "";

        switch(this.senderID){
            case againstID:
                className = "mine";
            break;
            default:
                className = "foreign foreign-a";
            break;
        } 
    
        // The time needs to come from the server ...
        let messageTime = new Date(this.timestamp);
        messageTime = formattedTime(messageTime);
    
        let messageStructure = `
            <p class="name-tag">${this.nameTag}</p>
            <p>${this.message}</p>
            <p class="time-tag">${messageTime} am</p>
        `;
        
        let messageHTML = document.createElement("li");
        messageHTML.className = className;
    
        messageHTML.innerHTML = messageStructure;

        return {
            messageHTML,
            messageID: this.messageID,
        }

    }

    /* send locally typed message to the MySQL database */
    send() {

    }

    /* check the message for malicious issues */
    scan() {

    }

    /* escape special character and URI strings */
    escape(){

    }

    checkForConfirmation() {

    }

}