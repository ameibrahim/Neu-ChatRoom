let chatView = document.querySelector(".chat-view");
let contactsView = document.querySelector(".contacts-view");
slideOutChatView();
let personalID = "xyz"; // make dynamic user

function slideInChatView(eventTrigger){ 
    chatView.style.left = "0%";
    let chatID = eventTrigger.getAttribute("data-chatid");
    let username = eventTrigger.getAttribute("data-username");
    let email = eventTrigger.getAttribute("data-email");
    let receiver = eventTrigger.getAttribute("data-receiver"); /*
    should this be refetched ??? */

    let usernamePlaceholder = document.querySelector(".message-header-title");
    usernamePlaceholder.textContent = username;

    let emailPlaceholder = document.querySelector(".members");
    emailPlaceholder.textContent = `( ${email} )`;

    loadMessagesFrom(chatID);
}

function slideOutChatView(){ chatView.style.left = "100%" }
function slideOutContactsView(){ contactsView.style.left = "-100%" }
function slideInContactsView(){ contactsView.style.left = "0%" }

( async () => {

    let results = await loadContacts(personalID);
    await buildContactsView(results);

})();

async function loadContacts(personalID) {

    return new Promise((resolve,reject) => {
        let params = `personalID=${personalID}`;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "include/contacts.fetch.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onload = function(){
            if( this.status == 200 ){
                let contacts = JSON.parse(this.responseText);

                // if(details == "") reject("Report Does Not Exist");
                // else { resolve(details) }

                console.log(contacts);
                resolve(contacts);
            }
            else{
                reject("Error Fetching User Details");
            }
        }

        xhr.send(params);

    });
    
}

async function buildContactsView(contacts){
    let contactsContainer = document.querySelector(".contacts-container");
    let HTMLContent = '';

    contacts.forEach(contact => {
        
        let contactRow = `
            <div class="contact-row" data-email=${contact.email} data-username=${contact.username} data-receiver=${contact.receiver} data-chatid=${contact.chat_id} onclick="slideInChatView(this)">
                <!-- what if the data-chatid was already placed as a link -->
                <div class="avatar">
                    <img src="images/person.jpg">
                </div>
                <p class="row-title">${contact.username}</p>
                <span class="action-icon">
                    <!-- <img src="images/icons/fi-rr-angle-small-right.svg" alt=""> -->
                    <img src="images/icons/fi-rr-angle-circle-right.svg" alt="">
                </span>
            </div>
        `;

        HTMLContent += contactRow;

    });

    contactsContainer.innerHTML = HTMLContent;

}

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

//TODO: -- DONE: use the personalID to fetch all the groups/chats this person has
// an association to

//TODO: -- DONE display all the available chats and then on-click it loads from a link
// the respective chat
