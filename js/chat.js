let callView = document.querySelector(".call-card-view");

async function loadMessagesFrom(chatID) {
    displayMessagesFor(personalID);
}

function displayMessagesFor(givenID){

    let messageContainer = document.querySelector(".messages-container");
    let containerHTML = "";

    let messages = [
        {
            message: "Hello",
            sender: "xyz",
            receiver: "abc",
            time: "12:34",

        },

        {
            message: "Hello",
            sender: "abc",
            receiver: "xyz",
            time: "12:34",

        }
    ]

    messages.forEach( message => {

        let className = "";

        switch(message.sender){
            case givenID:
                className = "mine";
            break;
            default:
                className = "foreign foreign-a";
            break;
        } 
        
        let messageStructure = `
            <li class=${className}>
                <p class="name-tag">A</p>
                <p>${message.message}</p>
                <p class="time-tag">${message.time} am</p>
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

function sendMessage(message) {

    //TODO: Prepare message with table header values
    //TODO: Send message using AJAX
    //TODO: resolve showMessageLoader() ... HARD
    //TODO: load new messages on other side of the chat.

}

function loadNewMessages(chatID, lastSyncedMessageID){

    //TODO: use the lastSyncedMessageID to filter all the newest messages from the database ... K.I
    //TODO: return the values and repopulate the view
}

function fetchChatIDs(personalID){

    //TODO: Schema build for participants in a group to have a flag of
    // allowed to true
    //TODO: ??? Schema build for participants in a group to have a flag of
    // role to standard / admin
    //TODO: links that load chats ... links are shareable
    // Should links load chats ??? Privacy ???

    //TODO: Schema build for chats to be specified as [type] -- [privacy]
    //[type]: direct, group
    // all chats are private

    //TODO: Future build check for group chats to have a cascade table of admins
    // and be able to accept new users into the group

    //TODO: use the personalID to fetch all the groups/chats this person has
    // an association to

    //TODO: display all the available chats and then on-click it loads from a link
    // the respective chat

}

function loadMessages(chatID){
    //TODO: Only load 20 message on load
}

// TODO: create a function that load older message when you scroll too
// far up ... test out how to append boxes as children at the beginning of the parent
