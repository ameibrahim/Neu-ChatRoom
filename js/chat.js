// This one is for the person you are texting
let caller_email = "abdulmunim@yahoo.com";
let caller_name = "abdulmunim";
let caller_id = "xyz"; 

// this is for the both of you
let chatID = "";

( async () => {
    
    // this is yours
    console.log(USER_NAME);
    console.log(USER_EMAIL);
    console.log(USER_ID);



    // let usernamePlaceholder = document.querySelector(".message-header-title");
    // usernamePlaceholder.textContent = USER_NAME;

    // let emailPlaceholder = document.querySelector(".members");
    // emailPlaceholder.textContent = `( ${USER_EMAIL} )`;

    let usernamePlaceholder = document.querySelector(".message-header-title");
    usernamePlaceholder.textContent = caller_name;

    let emailPlaceholder = document.querySelector(".members");
    emailPlaceholder.textContent = `( ${caller_email} )`;

    await loadMessagesFrom(chatID);

})()


async function loadMessagesFrom(email) {
    console.log("yey");
}

function displayMessages(){
    
}

let callView = document.querySelector(".call-card-view");

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

messageTypingInput.addEventListener(() => {

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
