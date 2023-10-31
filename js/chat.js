let callView = document.querySelector(".call-card-view");

function messageID(preText = ""){
    const date = Date.now();
    return preText + date;
}

async function loadMessagesFrom(chatID) {

    //TODO: Only load 20 message on load

    return new Promise((resolve,reject) => {
        let params = `chatID=${chatID}`;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "include/messages.fetch.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onload = function(){
            if( this.status == 200 ){
                let messages = JSON.parse(this.responseText);
                displayMessagesFor(personalID, messages);
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

function displayMessagesFor(givenID, messages){

    let messageContainer = document.querySelector(".messages-container");
    let containerHTML = "";

    messages.forEach( message => {

        let className = "";
        let nametag = "";

        switch(message.sender_id){
            case givenID:
                className = "mine";
                nametag = "A";
            break;
            default:
                className = "foreign foreign-a";
                nametag = "B";
            break;
        } 

        // let nametag = createTag(message.username);

        let time = new Date(message.timestamp);
        time = `${time.getHours()}:${time.getMinutes()}`;
        
        let messageStructure = `
            <li class="${className}">
                <p class="name-tag">${nametag}</p>
                <p>${message.message}</p>
                <p class="time-tag">${time} am</p>
            </li>
        `;

        containerHTML += messageStructure;

    });

    messageContainer.innerHTML = containerHTML;
}

function showCallView() {
    callView.style.display = "grid";
}

function hideCallView() {
    callView.style.display = "none";
}

function placeCall() {
    showCallView();
}

function endCall() {
    hideCallView();
}

let messageTypingInput = document.querySelector(".message-typing-input");

messageTypingInput.addEventListener('click', () => {

    let message = messageTypingInput.value;

    if (!regexCheck(message)){
        // showAlert("Your message seems to contain malicious content")
    }
    else{
        sendMessage(message)
        showMessageLoaderPromise();
    }
});

async function sendMessage(message) {

    return new Promise((resolve,reject) => {
        let params = `chatID=${chatID}`;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "include/messages.fetch.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onload = function(){
            if( this.status == 200 ){
                let messages = JSON.parse(this.responseText);
                displayMessagesFor(personalID, messages);
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
    
    //TODO: Prepare message with table header values
    //TODO: Send message using AJAX
    //TODO: resolve showMessageLoader() ... HARD
    //TODO: load new messages on other side of the chat.

}

function loadNewMessages(chatID, lastSyncedMessageID){

    //TODO: use the lastSyncedMessageID to filter all the newest messages from the database ... K.I
    //TODO: return the values and repopulate the view
}

// TODO: create a function that load older message when you scroll too
// far up ... test out how to append boxes as children at the beginning of the parent
