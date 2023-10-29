let chatView = document.querySelector(".chat-view");
let contactsView = document.querySelector(".contacts-view");

function slideInChatView(){ chatView.style.left = "0%" }
function slideOutChatView(){ chatView.style.left = "100%" }
function slideOutContactsView(){ contactsView.style.left = "-100%" }
function slideInContactsView(){ contactsView.style.left = "0%" }

async function loadContacts(personalID) {
    // console.log("yey");
}